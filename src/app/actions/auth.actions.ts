import { Action } from '@ngrx/store';

export enum AuthActionType {
  ADD_AUTH_USER = '[AUTH] Add user Auth',
  REMOVE_AUTH_USER = '[Auth] Remove user Auth',
}

export class AddAuthUser implements Action {
  readonly type = AuthActionType.ADD_AUTH_USER;

  constructor(public payload: { user: any, token: string }) { }
}

export class RemoveAuthUser implements Action {
  readonly type = AuthActionType.REMOVE_AUTH_USER;
}

export type AuthAction = AddAuthUser | RemoveAuthUser;