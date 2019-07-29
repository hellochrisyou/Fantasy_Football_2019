import {Component, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnInit, DoCheck} from '@angular/core';
import * as global from '../../var/globals';
import {RB, Player, WaiverData} from '../../model/interface.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {DraftService} from 'src/app/service/concrete/draft.service';
import {AddPlayerService} from 'src/app/service/emit/add-player.service';
import {LeagueService} from 'src/app/service/model/league.service';
import {WaiverService} from 'src/app/service/concrete/waiver.service';
import {MatDialog} from '@angular/material/dialog';
import {MyTeamDialog} from '../../dialog/my-team/my-team.dialog';
import {CloseDialogService} from 'src/app/service/emit/close-dialog.service';
import {NotifyService} from 'src/app/service/emit/notify.service';

@Component({
  selector: 'app-rb-table',
  templateUrl: './rb-table.component.html',
  styleUrls: ['./rb-table.component.scss']
})
export class RbTableComponent implements OnInit {
  rbCol: string[] = global.rbCol;
  rbArray: RB[];
  myPlayer: Player = {
    name: 'default',
    position: 'RB',
    active: false
  };
  isWaiver: boolean;
  dataSource: MatTableDataSource<RB>;
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
    this.notifyService.rbDraftComplete.subscribe(rbArray => {
      this.rbArray = rbArray;
      this.dataSource = new MatTableDataSource(this.rbArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.notifyService.rbWaiverComplete.subscribe(rbArray => {
      this.rbArray = rbArray;
      this.dataSource = new MatTableDataSource(this.rbArray);
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
  addRB(index: number): void {
    const name = this.rbArray[index].name;
    this.rbArray.splice(index, 1); //Do I need this?
    this.myPlayer.name = name;
    this.myPlayer.position = 'RB';
    this.myPlayer.fantasy_points = this.rbArray[index].fantasy_points;
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
