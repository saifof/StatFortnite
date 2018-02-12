import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ChartsModule} from "ng2-charts";

import { AppComponent } from './app.component';
import { StatsService  } from './service/stats.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
