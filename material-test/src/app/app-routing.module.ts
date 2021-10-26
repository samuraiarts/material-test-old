import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonPageComponent } from './button-page/button-page.component';
import { ControlsComponent } from './controls/controls.component';
import { HomeComponent } from './home/home.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { SelectorsComponent } from "./selectors/selectors.component";
import { StepperComponent } from './stepper/stepper.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ChangeEmailComponent } from './change-email/change-email.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent }, 
  {path: 'button-page', component: ButtonPageComponent },
  {path: 'selectors', component: SelectorsComponent },
  {path: 'input-fields', component: InputFieldsComponent },
  {path: 'controls', component: ControlsComponent },
  {path: 'stepper', component: StepperComponent },
  {path: 'applicant', component: ApplicantComponent},
  {path: 'change-email', component: ChangeEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
