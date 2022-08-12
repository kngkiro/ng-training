import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AbbaComponent } from './abba/abba.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { NewphaseComponent } from './instructor/newphase/newphase.component';

import { ApprenticeComponent } from './apprentice/apprentice.component';
import {InstructorComponent} from './instructor/instructor.component';



@NgModule({
  declarations: [
    AppComponent, 
    FormsComponent,
    AbbaComponent,
    ApprenticeComponent,
    InstructorComponent,
    NewphaseComponent,
    ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
