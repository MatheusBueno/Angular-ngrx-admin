import { Action } from '@ngrx/store';

export enum LoginActionsType {
  LOGIN_WITH_EMAIL = '[Login Page] Login with email',
  LOGIN_WITH_EMAIL_SUCCESS = '[Login Page] Login with email Success',
  LOGIN_WITH_EMAIL_FAILURE = '[Login Page] Login with email Faiulure',
  LOGOUT = '[Login Page] Logout',
  LOGOUT_SUCCESS = '[Login Page] Logout Success',
  LOGOUT_FAILURE = '[Login Page] Logout Failure',
}

export class LoginWithEmail implements Action {
  readonly type = LoginActionsType.LOGIN_WITH_EMAIL;

  constructor(public payload: { email: string, password: string }) { }
}

export class LoginWithEmailSuccess implements Action {
  readonly type = LoginActionsType.LOGIN_WITH_EMAIL_SUCCESS;

  constructor(public payload: any) { }
}

export class LoginWithEmailFailure implements Action {
  readonly type = LoginActionsType.LOGIN_WITH_EMAIL_FAILURE;

  constructor(public payload: any) { }
}

export class LoginLogout implements Action {
  readonly type = LoginActionsType.LOGOUT;
}

export class LoginLogoutSuccess implements Action {
  readonly type = LoginActionsType.LOGOUT_SUCCESS;
}

export class LoginLogoutFailure implements Action {
  readonly type = LoginActionsType.LOGOUT_FAILURE;

  constructor(public payload: any) { }
}

export type LoginActions =
  LoginWithEmail |
  LoginWithEmailSuccess |
  LoginWithEmailFailure;
