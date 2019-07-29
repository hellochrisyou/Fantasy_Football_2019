import {Component, ViewChild, EventEmitter, AfterViewInit, OnInit, DoCheck} from '@angular/core';
import * as globals from '../../var/globals';
import {DEF, Player} from '../../model/interface.model';
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
  selector: 'app-defense-table',
  templateUrl: './defense-table.component.html',
  styleUrls: ['./defense-table.component.scss']
})
export class DefenseTableComponent implements OnInit {
  defCol: string[] = globals.defCol;
  defenseArray: DEF[];
  myPlayer: Player = {
    name: 'default',
    position: 'Defense',
    active: false
  };
  isWaiver: boolean;
  dataSource: MatTableDataSource<DEF>;
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
    this.notifyService.defDraftComplete.subscribe(defenseArray => {
      this.defenseArray = defenseArray;
      this.dataSource = new MatTableDataSource(this.defenseArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.notifyService.defWaiverComplete.subscribe(defenseArray => {
      this.defenseArray = defenseArray;
      this.dataSource = new MatTableDataSource(this.defenseArray);
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
  addDefense(index: number): void {
    const name = this.defenseArray[index].name;
    this.defenseArray.splice(index, 1); //Do I need this?
    this.myPlayer.name = name;
    this.myPlayer.position = 'DEF';
    this.myPlayer.fantasy_points = this.defenseArray[index].fantasy_points;
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
