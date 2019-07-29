import {MaterialModule} from './../material.module';
import {NgModule} from '@angular/core';
import {InSeasonRoutingModule} from './in-season-routing.module';
import {InSeasonComponent} from './in-season.component';
import {MatchupComponent} from './matchup/matchup.component';
import {MyTeamComponent} from './my-team/my-team.component';
import {TradeComponent} from './trade/trade.component';
import {WaiverComponent} from './waiver/waiver.component';
import {SharedModule} from '../shared/shared.module';
import {WaiverService} from '../service/concrete/waiver.service';

@NgModule({
  declarations: [InSeasonComponent, MyTeamComponent, MatchupComponent, TradeComponent, WaiverComponent],
  imports: [SharedModule, InSeasonRoutingModule],
  exports: [InSeasonComponent, MyTeamComponent, MatchupComponent, TradeComponent, WaiverComponent],
  providers: []
})
export class InSeasonModule {}
