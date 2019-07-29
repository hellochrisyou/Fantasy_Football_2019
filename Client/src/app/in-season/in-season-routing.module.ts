import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InSeasonComponent} from './in-season.component';

const routes: Routes = [
  {
    path: '',
    component: InSeasonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InSeasonRoutingModule {}
