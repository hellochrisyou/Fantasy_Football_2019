import {ApiService} from '../service/api/api.service';
import {LeagueService} from '../service/model/league.service';
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {League, DTO} from 'src/app/shared/model/interface.model';
import * as globals from '../shared/var/enum';
import {SubmitPopupDialog} from 'src/app/shared/dialog/submit-popup/submit-popup.dialog';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  // Ng Value
  team = '';
  helmet2 = 'red';
  name = '';
  teamNames: string[];
  // Helmet Values
  takenHelmets2: string[];
  leagues: string[];
  redHelmet2 = true;
  orangeHelmet2 = true;
  goldHelmet2 = true;
  blackHelmet2 = true;
  greyHelmet2 = true;
  greenHelmet2 = true;
  blueHelmet2 = true;
  purpleHelmet2 = true;

  // Controls
  teamFormCtrl = new FormControl('', [Validators.required]);
  helmetFormCtrl2 = new FormControl('', [Validators.required]);
  leagueFormCtrl = new FormControl('', [Validators.required]);
  teamFormGroup: FormGroup;

  dto: DTO = {
    myLeagueName: '',
    myAccountName: '',
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

  constructor(
    public dialog: MatDialog,
    private leagueService: LeagueService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.leagues = this.leagueService.getAllLeagueNames();
    console.log('this.leagues', this.leagues);
    this.teamFormGroup = this.formBuilder.group({
      teamFormCtrl: ['', , Validators.required, Validators.min(1)],
      helmetFormCtrl2: ['', , Validators.required, Validators.min(1)],
      leagueFormCtrl: ['', , Validators.required, Validators.min(1)]
    });
  }

  createTeam(teamName, helmet2, leagueName): void {
    if (this.leagueService.findTeamNameExist(teamName)) {
      this.duplicatePopup2(teamName);
    } else {
      this.dto.myAccountName = this.leagueService.getMyAccount().name;
      this.dto.myLeagueName = leagueName;
      this.dto.myTeamName = teamName;
      this.dto.myTeamHelmet = helmet2;
      console.log(this.dto);
      this.api.httpPost(globals.ApiUrls.createTeam, this.dto).subscribe(myAccount => {
        this.leagueService.updateMyAccount(myAccount);
        this.createdPopup2();
      });
    }
  }

  createdPopup2(): void {
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'Team Created',
        subTitle: 'Success',
        text: 'Your Team has been successfully created.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.router.navigate(['home']);
    });
  }

  duplicatePopup2(leagueName): void {
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'Create Team Error',
        subTitle: 'The name: ' + leagueName + ' already exists',
        text: 'Please enter a different Team name.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {});
  }

  assignHelmetValues(): void {
    for (const helmet of this.takenHelmets2) {
      if (helmet === 'red') {
        this.redHelmet2 = false;
      }
      if (helmet === 'orange') {
        this.orangeHelmet2 = false;
      }
      if (helmet === 'gold') {
        this.goldHelmet2 = false;
      }
      if (helmet === 'black') {
        this.blackHelmet2 = false;
      }
      if (helmet === 'grey') {
        this.greyHelmet2 = false;
      }
      if (helmet === 'green') {
        this.greenHelmet2 = false;
      }
      if (helmet === 'blue') {
        this.blueHelmet2 = false;
      }
      if (helmet === 'purple') {
        this.purpleHelmet2 = false;
      }
    }
  }
}
