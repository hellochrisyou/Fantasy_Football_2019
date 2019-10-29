import {Component, OnInit} from '@angular/core';
import {Matchup} from 'src/app/shared/model/interface.model';
import {LeagueService} from 'src/app/service/model/league.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.scss']
})
export class MatchupComponent implements OnInit {
  // displayedColumns: string[] = ['myName', 'myPosition', 'middle', 'otherName', 'otherPosition'];
  // thisMatchup: Matchup = {
  //   myPlayers: [],
  //   otherPlayers: []
  // };
  // dataSource: MatTableDataSource<Matchup>;
  // constructor(private leagueService: LeagueService) {}

  ngOnInit() {
    // this.thisMatchup = this.leagueService.getMatchupTeam();
    // this.dataSource = new MatTableDataSource(this.thisMatchup);
  }
}
