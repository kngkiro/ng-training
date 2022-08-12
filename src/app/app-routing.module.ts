
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import {AbbaComponent} from './abba/abba.component';
import {ApprenticeComponent} from './apprentice/apprentice.component';
import {InstructorComponent} from './instructor/instructor.component';
import {ApplicationComponent} from './apprentice/application/application.component';



const routes: Routes = [
  { path: 'abba', component: AbbaComponent },
  { path: 'apprentice', component: ApprenticeComponent},
  { path: 'forms', component: FormsComponent },
  { path: 'instructor', component: InstructorComponent},
  { path: 'apprentice/application', component: ApplicationComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
