import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DraftComponent} from './draft.component';

const routes: Routes = [
  {
    path: '',
    component: DraftComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule {}
