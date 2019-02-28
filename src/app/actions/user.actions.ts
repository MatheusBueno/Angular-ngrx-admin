import { Action } from '@ngrx/store';

export const GET_USER = '[Login Auth] Get User';

export const AUTHENTICATED = '[Login Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Login Auth] Not Authenticated';

export const GOOGLE_LOGIN = '[Login Auth] Google login attemp'

export const LOGOUT = '[Login Auth] Logout';
export const AUTH_ERROR = '[Login Auth] Error';

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) { }
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload?: any) { }
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) { }
}
export class GoogleLogin implements Action {
  readonly type = GOOGLE_LOGIN;
  constructor(public payload?: any) { }
}
export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: any) { }
}
export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload?: any) { }
}

export type All = GetUser | Authenticated | NotAuthenticated | GoogleLogin | Logout | AuthError;