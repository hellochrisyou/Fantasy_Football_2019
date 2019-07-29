import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/auth/auth.service';
import {LeagueService} from './service/model/league.service';
import {NotifyService} from './service/emit/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userName = 'default';

  constructor(private notifyService: NotifyService, private leagueService: LeagueService, public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    this.notifyService.sendUserName.subscribe(userName => {
      this.userName = userName;
    });
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }
}
