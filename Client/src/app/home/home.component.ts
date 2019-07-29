import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../core/auth/auth.service';
import {LeagueService} from '../service/model/league.service';
import {ApiService} from '../service/api/api.service';
import * as globals from '../shared/var/enum';
import {League, LeagueMenu} from '../shared/model/interface.model';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  leagues: League[] = [];
  leagueFormCtrl = new FormControl('', [Validators.required]);
  leagueFormGroup: FormGroup;
  name = '';
  dataSource: MatTableDataSource<LeagueMenu>;
  leagueNames: string[] = [];
  leagueMenus: LeagueMenu[] = [];
  draft = 'Draft';
  onGoing = 'Ongoing';

  displayedColumns: string[] = ['option', 'name', 'count'];

  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private leagueService: LeagueService,
    private api: ApiService
  ) {}
  ngAfterViewInit() {
    const userName = this.leagueService.getUserName();
    this.api.httpGet(globals.ApiUrls.findAccount + userName).subscribe(account => {
      this.leagueService.setMyAccount(account);
      console.log('#1', account);
      this.api.httpGetAll(globals.ApiUrls.getAllLeagues).subscribe(leagues => {
        this.leagueService.setAllLeagues(leagues);
        this.leagueMenus = this.leagueService.setLeagueMenu(leagues);
        this.dataSource = new MatTableDataSource(this.leagueMenus);
      });
    });

    console.log('successful');
    this.leagueFormGroup = this.formBuilder.group({
      leagueFormCtrl: ['', , Validators.required, Validators.min(1)]
    });
  }
  CreateTeam(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
  Draft(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
  League(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
}
