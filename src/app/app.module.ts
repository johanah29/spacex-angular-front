import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCapsuleComponent } from './component/list-capsule/list-capsule.component';
import { CapsuleComponent } from './component/capsule/capsule.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCapsuleComponent,
    CapsuleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
