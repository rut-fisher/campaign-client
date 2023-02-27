import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { GroupsComponent } from './components/groups/groups.component';
import { PersonalComponent } from './components/personal/personal.component';
import { TotalComponent } from './components/total/total.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http'
import { MAIN_COLOR, SUB_COLOR, THIRD_COLOR } from './consts';
import { CustomSlicePipe } from './pipes/custom-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    CardDetailsComponent,
    GroupsComponent,
    PersonalComponent,
    CustomSlicePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      backgroundColor: SUB_COLOR,
      backgroundPadding: 8,
      radius: 90,
      space: -15,
      maxPercent: 1000,
      unitsColor: MAIN_COLOR,
      outerStrokeWidth: 7.5,
      outerStrokeColor: MAIN_COLOR,
      innerStrokeColor: SUB_COLOR,
      innerStrokeWidth: 3,
      titleColor: MAIN_COLOR,
      subtitleColor: THIRD_COLOR
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
