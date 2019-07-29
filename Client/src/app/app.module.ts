import {AuthService} from './core/auth/auth.service';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CallbackComponent} from './callback/callback.component';
import {InSeasonModule} from './in-season/in-season.module';
import {StatsFunctionService} from './service/logic/stats-function.service';
import {LeagueService} from './service/model/league.service';
import {FilterService} from './service/logic/filter.service';
import {HttpRequestInterceptor} from './core/interceptor/http-request.interceptor';
import {AuthGuardService} from './core/auth/auth-guard';
import {ApiService} from './service/api/api.service';
import {AddPlayerService} from './service/emit/add-player.service';
import {WaiverService} from './service/concrete/waiver.service';
import {DraftService} from './service/concrete/draft.service';

// import { LastSeasonRestApiService } from './service/nfl-api/last-season-rest-api.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    InSeasonModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    LeagueService,
    ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
    AddPlayerService,
    WaiverService,
    DraftService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
