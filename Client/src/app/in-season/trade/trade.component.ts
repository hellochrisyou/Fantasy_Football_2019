import {Component, OnInit} from '@angular/core';
import {LeagueService} from 'src/app/service/model/league.service';
import {Team, Player} from 'src/app/shared/model/interface.model';
import {CloseDialogService} from 'src/app/service/emit/close-dialog.service';
import {MyTeamDialog} from 'src/app/shared/dialog/my-team/my-team.dialog';
import {MatDialog} from '@angular/material/dialog';
import * as globals from '../../shared/var/enum';
import {Router} from '@angular/router';
import {ToggleTradeService} from 'src/app/service/emit/toggle-trade.service';
import {SubmitPopupDialog} from 'src/app/shared/dialog/submit-popup/submit-popup.dialog';
import {ApiService} from 'src/app/service/api/api.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.scss']
})
export class TradeComponent implements OnInit {
  allTeams: Team[];
  otherPlayer: Player = {
    name: 'default',
    position: 'Defense',
    active: false
  };
  constructor(
    private closeDialogService: CloseDialogService,
    public dialog: MatDialog,
    private api: ApiService,
    private toggleTradeService: ToggleTradeService,
    private leagueService: LeagueService,
    public router: Router
  ) {}

  ngOnInit() {
    this.allTeams = this.leagueService.getOtherTeams();
    this.toggleTradeService.tradePopUp.subscribe(dto => {
      this.api.httpPut(globals.ApiUrls.tradeTeam, dto).subscribe(returnData => {
        console.log('hello');
        this.successPopup();
      });
    });
  }

  OpenDialogOtherTeam(teamIndex, playerIndex) {
    this.toggleTradeService.setOtherTeamName(this.allTeams[teamIndex].name);
    this.otherPlayer = this.allTeams[teamIndex].players[playerIndex];
    this.toggledPopup();
  }

  toggledPopup(): void {
    this.toggleTradeService.setIsTrade(true);
    const dialogRef = this.dialog.open(MyTeamDialog, {
      width: '25vw',
      data: {
        player: this.otherPlayer
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.router.navigate(['home']);
    });
    this.closeDialogService.emitClose.subscribe(status => {
      dialogRef.close();
    });
  }
  successPopup(): void {
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'Trade Players',
        subTitle: 'Success',
        text: 'You have traded players.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.closeDialogService.closeDialog('Closed');
      this.router.navigate(['home']);
    });
  }
}
