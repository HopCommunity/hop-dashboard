import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { CognitoModel } from '../../models/cognito/cognito.model';

import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  private static _instance: CognitoService;

  static get instance(): CognitoService | null {
    return this._instance;
  }

  static set instance(val: CognitoService) {
    this._instance = val;
  }

  public static user: CognitoUser;
  public authenticated: Boolean;

  constructor(private amplifyService: AmplifyService) {
    if (CognitoService.instance) {
      return CognitoService.instance;
    }

    this.amplifyService.authStateChange$.subscribe(
      (authState: CognitoModel.AuthState) => {
        console.log('authState', authState);
      }
    );

    CognitoService.instance = this;
  }

  signUp = async (username, password, email, phone): Promise<CognitoUser> => {
    try {
      const { user }: ISignUpResult = await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          phone, // optional - E.164 number convention
          // other custom attributes
        },
      });
      console.log(user);
      CognitoService.user = user;
      return CognitoService.user;
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  signIn = async (username, password) => {
    try {
      const user = await Auth.signIn(username, password);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  resendConfirmationCode = async (username) => {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  };

  signOut = async (isGlobal: boolean = false) => {
    try {
      await Auth.signOut({ global: isGlobal });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
}
