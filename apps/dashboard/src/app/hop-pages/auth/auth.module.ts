import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm.component';
import { PasswordComponent } from './password/password.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { HopAuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    ConfirmComponent,
    PasswordComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
  ],
  imports: [CommonModule, HopAuthRoutingModule],
})
export class HopAuthModule {}
