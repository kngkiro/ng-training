import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AbbaComponent } from './abba/abba.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenticeComponent } from './apprentice/apprentice.component';

@NgModule({
  declarations: [
    AppComponent,
    AbbaComponent,
    ApprenticeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
