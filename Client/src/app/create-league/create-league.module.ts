import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateLeagueRoutingModule} from './create-league-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CreateLeagueComponent} from './create-league.component';

@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [SharedModule, CreateLeagueRoutingModule],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule {}
