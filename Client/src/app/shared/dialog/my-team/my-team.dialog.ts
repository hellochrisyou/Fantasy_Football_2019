import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData, Player, DTO, WaiverData} from '../../model/interface.model';
import {LeagueService} from 'src/app/service/model/league.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import * as global from '../../var/globals';
import {AddPlayerService} from 'src/app/service/emit/add-player.service';
import {CloseDialogService} from 'src/app/service/emit/close-dialog.service';
import {ToggleTradeService} from 'src/app/service/emit/toggle-trade.service';

@Component({
  selector: 'app-my-team-dialog',
  templateUrl: './my-team.dialog.html',
  styleUrls: ['./my-team.dialog.scss']
})
export class MyTeamDialog implements OnInit {
  title = '';
  subTitle = '';
  text = '';
  myPlayer: Player = {
    name: 'default',
    position: '',
    active: false
  };
  playerCol: string[] = global.playerCol;
  playerArray: Player[] = [];
  dto: DTO = {
    myAccountName: '',
    myLeagueName: '',
    myTeamName: '',
    myTeamHelmet: '',
    otherTeamName: '',
    player1: {
      name: '',
      position: '',
      active: false
    },
    player2: {
      name: '',
      position: '',
      active: false
    }
  };
  isWaiver = false;
  isActive = false;
  isTrade = false;
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(
    private addPlayerService: AddPlayerService,
    private toggleTradeService: ToggleTradeService,
    public dialogRef: MatDialogRef<MyTeamDialog>,
    @Inject(MAT_DIALOG_DATA) public data: WaiverData,
    private leagueService: LeagueService
  ) {
    this.myPlayer = data.player;
  }
  ngOnInit() {
    this.isTrade = this.toggleTradeService.getIsTrade();
    this.isWaiver = this.addPlayerService.getIsWaiver();
    this.isActive = this.toggleTradeService.getIsActive();
    this.isWaiver || this.isTrade
      ? (this.playerArray = this.leagueService.getMyPlayers())
      : this.isActive
      ? (this.playerArray = this.leagueService.getInActivePlayers())
      : (this.playerArray = this.leagueService.getActivePlayers());
    this.dataSource = new MatTableDataSource(this.playerArray);
  }

  emitPlayer(index) {
    this.dto.myAccountName = this.leagueService.getMyAccount().name;
    this.dto.myLeagueName = this.leagueService.getMyLeague().name;
    this.dto.myTeamName = this.leagueService.getMyTeam().name;
    this.dto.player1 = this.myPlayer; // Trade:(Other Team)
    this.dto.player2 = this.playerArray[index]; // My Team
    if (this.isWaiver) {
      this.addPlayerService.addWaiverPlayer(this.dto);
    } else if (this.isTrade) {
      this.dto.otherTeamName = this.toggleTradeService.getOtherTeamName();
      this.toggleTradeService.tradeSubmit(this.dto);
    } else {
      this.toggleTradeService.toggleSubmit(this.dto);
    }
  }
}
