import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinerComponent } from './progress-spiner/progress-spiner.component';

const routes: Routes = [
  { path: 'buttonIcon', component: ButtonsIconsComponent},
  { path: 'formFieldInput', component: FormFieldInputComponent},
  { path: 'progBarSpinner', component: ProgressSpinerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
