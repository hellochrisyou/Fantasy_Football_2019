import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateTeamRoutingModule} from './create-team-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CreateTeamComponent} from './create-team.component';

@NgModule({
  declarations: [CreateTeamComponent],
  imports: [SharedModule, CreateTeamRoutingModule],
  exports: [CreateTeamComponent]
})
export class CreateTeamModule {}
