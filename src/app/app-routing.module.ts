
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import {AbbaComponent} from './abba/abba.component';
import {ApprenticeComponent} from './apprentice/apprentice.component';


const routes: Routes = [
  { path: 'abba', component: AbbaComponent },
  { path: 'apprentice', component: ApprenticeComponent},
  { path: '', component: FormsComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
