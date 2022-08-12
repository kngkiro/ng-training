import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AbbaComponent } from './abba/abba.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ApprenticeComponent } from './apprentice/apprentice.component';


@NgModule({
  declarations: [
    AppComponent, 
    FormsComponent,
    AbbaComponent,
    ApprenticeComponent,
    ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
