import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CognitoService } from './services/cognito/cognito.service';
import { httpInterceptorProviders } from './interceptors';
import { CognitoAuthGuard } from './guards/cognito-auth/cognito-auth.guard';
import { CognitoUnauthGuard } from './guards/cognito-unauth/cognito-unauth.guard';
import * as cognitoModel from '../lib/models/cognito/cognito.model';
import Amplify from 'aws-amplify';

@NgModule({
  imports: [CommonModule],
})
export class AuthModule {
  static forRoot(
    config: cognitoModel.CognitoModel.CognitoConfigModel
  ): ModuleWithProviders<AuthModule> {
    Amplify.configure(config);
    return {
      ngModule: AuthModule,
      providers: [
        httpInterceptorProviders,
        CognitoAuthGuard,
        CognitoUnauthGuard,
        CognitoService,
      ],
    };
  }
}
