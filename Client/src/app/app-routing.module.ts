import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CallbackComponent} from './callback/callback.component';
import {AuthGuardService as AuthGuard} from './core/auth/auth-guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {
  //   path: 'callback',
  //   component: CallbackComponent
  // },
  {
    path: 'create-league',
    loadChildren: () => import('./create-league/create-league.module').then(mod => mod.CreateLeagueModule)
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then(mod => mod.CreateTeamModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then(mod => mod.DraftModule)
  },
  {
    path: 'in-season',
    loadChildren: () => import('./in-season/in-season.module').then(mod => mod.InSeasonModule)
  }

  // {
  //   path: '**',
  //   redirectTo: ''
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
