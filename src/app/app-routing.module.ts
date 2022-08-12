
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import {AbbaComponent} from './abba/abba.component';
import {ApprenticeComponent} from './apprentice/apprentice.component';
import {InstructorComponent} from './instructor/instructor.component';
import {LandingpageComponent} from './landingpage/landingpage.component';


import {NewphaseComponent} from './instructor/newphase/newphase.component';
import { NewjobComponent } from './abba/newjob/newjob.component';

import {ApplicationComponent} from './apprentice/application/application.component';
import { HelpComponent } from './help/help.component';



const routes: Routes = [
  { path: 'abba', component: AbbaComponent },
  { path: 'apprentice', component: ApprenticeComponent},
  { path: 'forms', component: FormsComponent },
  { path: 'instructor', component: InstructorComponent},
  { path: 'instructor/newphase', component: NewphaseComponent},
  { path: 'apprentice/application', component: ApplicationComponent},
  { path: 'abba/newjob', component: NewjobComponent},
  { path: 'help', component: HelpComponent},
  { path: '', component: LandingpageComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
