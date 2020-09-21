import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { SignInComponent } from 'aws-amplify-angular';
import { SignoutComponent } from './signout/signout.component';
import { PasswordComponent } from './password/password.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signing', component: SignInComponent },
      { path: 'singout', component: SignoutComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'confirm', component: ConfirmComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HopAuthRoutingModule {}
