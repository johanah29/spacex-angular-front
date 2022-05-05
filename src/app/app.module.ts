import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './launch-detail/alunch-detail.component';
import { LunchProgramsComponent } from './launch-programs/launch-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailComponent,LunchProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
