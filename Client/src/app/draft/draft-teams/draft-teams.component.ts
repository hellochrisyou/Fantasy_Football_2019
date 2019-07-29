import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
import {SubmitPopupDialog} from 'src/app/shared/dialog/submit-popup/submit-popup.dialog';
import {AddPlayerService} from '../../service/emit/add-player.service';
import {ApiService} from 'src/app/service/api/api.service';
import * as globals from '../../shared/var/enum';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-draft-teams',
  templateUrl: './draft-teams.component.html',
  styleUrls: ['./draft-teams.component.scss']
})
export class DraftTeamsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public router: Router,
    private addPlayerService: AddPlayerService,
    private api: ApiService
  ) {
    this.addPlayerService.setIsWaiver(false);
  }
  ngOnInit() {
    this.addPlayerService.draftPopUp.subscribe(dto => {
      this.api.httpPut(globals.ApiUrls.addPlayer, dto).subscribe(returnData => {
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
      this.router.navigate(['home']);
    });
  }
}
