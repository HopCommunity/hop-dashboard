import { TestBed } from '@angular/core/testing';

import { CognitoUnauthGuard } from './cognito-unauth.guard';

describe('CognitoUnauthGuard', () => {
  let guard: CognitoUnauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CognitoUnauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
