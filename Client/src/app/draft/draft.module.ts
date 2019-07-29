import {DraftService} from 'src/app/service/concrete/draft.service';
import {NgModule} from '@angular/core';
import {DraftRoutingModule} from './draft-routing.module';
import {DraftComponent} from './draft.component';
import {MyDraftTeamComponent} from './my-draft-team/my-draft-team.component';
import {OtherDraftTeamsComponent} from './other-draft-teams/other-draft-teams.component';
import {DraftTeamsComponent} from './draft-teams/draft-teams.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {AddPlayerService} from '../service/emit/add-player.service';

@NgModule({
  declarations: [DraftComponent, MyDraftTeamComponent, OtherDraftTeamsComponent, DraftTeamsComponent],
  imports: [SharedModule, DraftRoutingModule],
  exports: [DraftComponent, MyDraftTeamComponent, OtherDraftTeamsComponent, DraftTeamsComponent],
  providers: []
})
export class DraftModule {}
