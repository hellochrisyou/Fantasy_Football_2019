import {KickerTableComponent} from './component/kicker-table/kicker-table.component';
import {DefenseTableComponent} from './component/defense-table/defense-table.component';
import {WrTableComponent} from './component/wr-table/wr-table.component';
import {QbTableComponent} from './component/qb-table/qb-table.component';
import {SubmitPopupDialog} from './dialog/submit-popup/submit-popup.dialog';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {RbTableComponent} from './component/rb-table/rb-table.component';
import {TeTableComponent} from './component/te-table/te-table.component';
import {MaterialModule} from '../material.module';
import {MyTeamDialog} from './dialog/my-team/my-team.dialog';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SubmitPopupDialog,
    MyTeamDialog,
    QbTableComponent,
    RbTableComponent,
    WrTableComponent,
    TeTableComponent,
    DefenseTableComponent,
    KickerTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
    SubmitPopupDialog,
    MyTeamDialog,
    QbTableComponent,
    RbTableComponent,
    WrTableComponent,
    TeTableComponent,
    DefenseTableComponent,
    KickerTableComponent
  ],
  entryComponents: [SubmitPopupDialog, MyTeamDialog]
})
export class SharedModule {}
