import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './components/launch-detail/alunch-detail.component';
import { LaunchProgramsComponent } from './components/launch-programs/launch-programs.component';
import { ListCapsuleComponent } from './components/list-capsule/list-capsule.component';
import { CapsuleComponent } from './components/capsule/capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailComponent,
    LaunchProgramsComponent,
    ListCapsuleComponent,
    CapsuleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
