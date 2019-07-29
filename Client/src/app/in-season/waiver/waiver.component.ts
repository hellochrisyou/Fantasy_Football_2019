import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LeagueService} from 'src/app/service/model/league.service';
import {DraftService} from 'src/app/service/concrete/draft.service';
import {SubmitPopupDialog} from 'src/app/shared/dialog/submit-popup/submit-popup.dialog';
import {Router} from '@angular/router';
import {WaiverService} from 'src/app/service/concrete/waiver.service';
import {AddPlayerService} from 'src/app/service/emit/add-player.service';
import {ApiService} from 'src/app/service/api/api.service';
import * as globals from '../../shared/var/enum';
import {MatDialog} from '@angular/material/dialog';
import {CloseDialogService} from 'src/app/service/emit/close-dialog.service';

@Component({
  selector: 'app-waiver',
  templateUrl: './waiver.component.html',
  styleUrls: ['./waiver.component.scss']
})
export class WaiverComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService,
    public router: Router,
    private addPlayerService: AddPlayerService,
    private api: ApiService,
    private waiverService: WaiverService
  ) {
    this.addPlayerService.setIsWaiver(true);
  }
  ngOnInit() {
    this.waiverService.CallNflApi();
    this.addPlayerService.waiverPopUp.subscribe(dto => {
      this.api.httpPut(globals.ApiUrls.addWaiver, dto).subscribe(returnData => {
        console.log('returndata', returnData);
        this.draftedPopup();
      });
    });
  }

  draftedPopup(): void {
    const name = this.addPlayerService.getDraftName();
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'League Draft',
        subTitle: 'Success',
        text: 'You have drafted ' + name + ' successfully.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.closeDialogService.closeDialog('Closed');
      this.router.navigate(['home']);
    });
  }
}
