import {Component, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnInit, DoCheck} from '@angular/core';
import * as global from '../../var/globals';
import {QB, Player} from '../../model/interface.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {DraftService} from 'src/app/service/concrete/draft.service';
import {AddPlayerService} from 'src/app/service/emit/add-player.service';
import {LeagueService} from 'src/app/service/model/league.service';
import {WaiverService} from 'src/app/service/concrete/waiver.service';
import {MatDialog} from '@angular/material/dialog';
import {CloseDialogService} from 'src/app/service/emit/close-dialog.service';
import {MyTeamDialog} from '../../dialog/my-team/my-team.dialog';
import {NotifyService} from 'src/app/service/emit/notify.service';

@Component({
  selector: 'app-qb-table',
  templateUrl: './qb-table.component.html',
  styleUrls: ['./qb-table.component.scss']
})
export class QbTableComponent implements OnInit {
  qbCol: string[] = global.qbCol;
  qbArray: QB[];
  myPlayer: Player = {
    name: 'default',
    position: 'QB',
    active: false
  };
  isWaiver: boolean;
  dataSource: MatTableDataSource<QB>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService,
    private addPlayerService: AddPlayerService,
    private leagueService: LeagueService,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.notifyService.qbDraftComplete.subscribe(qbArray => {
      this.qbArray = qbArray;
      this.dataSource = new MatTableDataSource(this.qbArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.notifyService.qbWaiverComplete.subscribe(qbArray => {
      this.qbArray = qbArray;
      console.log('notify complete waiver', qbArray);
      this.dataSource = new MatTableDataSource(this.qbArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addQB(index: number): void {
    const name = this.qbArray[index].name;
    this.qbArray.splice(index, 1); //Do I need this?
    this.myPlayer.name = name;
    this.myPlayer.position = 'QB';
    this.myPlayer.fantasy_points = this.qbArray[index].fantasy_points;
    if (this.isWaiver) {
      this.myTeamPopup(index);
    } else {
      this.addPlayerService.addDraftPlayer(this.leagueService.updateDTO(this.myPlayer), name);
    }
  }
  myTeamPopup(index): void {
    const dialogRef = this.dialog.open(MyTeamDialog, {
      width: '25vw',
      data: {
        player: this.myPlayer
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      // Add Waiver player
    });
    this.closeDialogService.emitClose.subscribe(status => {
      dialogRef.close();
    });
  }
}
