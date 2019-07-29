import {Component, ViewChild, Input, Output, EventEmitter, AfterViewInit, OnInit, DoCheck} from '@angular/core';
import * as global from '../../var/globals';
import {WR, Player, WaiverData} from '../../model/interface.model';
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
  selector: 'app-wr-table',
  templateUrl: './wr-table.component.html',
  styleUrls: ['./wr-table.component.scss']
})
export class WrTableComponent implements OnInit {
  wrCol: string[] = global.wrCol;
  wrArray: WR[];
  myPlayer: Player = {
    name: 'default',
    position: 'RB',
    active: false
  };
  isWaiver: boolean;
  dataSource: MatTableDataSource<WR>;
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
    this.notifyService.wrDraftComplete.subscribe(wrArray => {
      this.wrArray = wrArray;
      this.dataSource = new MatTableDataSource(this.wrArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.notifyService.wrWaiverComplete.subscribe(wrArray => {
      this.wrArray = wrArray;
      this.dataSource = new MatTableDataSource(this.wrArray);
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
  addWR(index: number): void {
    const name = this.wrArray[index].name;
    this.wrArray.splice(index, 1); //Do I need this?
    this.myPlayer.name = name;
    this.myPlayer.position = 'WR';
    this.myPlayer.fantasy_points = this.wrArray[index].fantasy_points;
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
