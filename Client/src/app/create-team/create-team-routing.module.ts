import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateTeamComponent} from './create-team.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTeamComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTeamRoutingModule {}
