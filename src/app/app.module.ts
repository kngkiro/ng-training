import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AbbaComponent } from './abba/abba.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';

import { ApprenticeComponent } from './apprentice/apprentice.component';
import { InstructorComponent } from './instructor/instructor.component';

import { NewphaseComponent } from './instructor/newphase/newphase.component';
import { NewjobComponent } from './abba/newjob/newjob.component';

import { ApplicationComponent } from './apprentice/application/application.component';



@NgModule({
  declarations: [
    AppComponent, 
    FormsComponent,
    AbbaComponent,
    ApprenticeComponent,
    InstructorComponent,
    NewphaseComponent,
    ApplicationComponent,
    NewjobComponent
    ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
