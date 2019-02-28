import { Injectable } from "@angular/core";
import * as userActions from '../actions/user.actions';
import { User } from '../models/user.model';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

import * as firebase from 'firebase';
import { reducers } from '../reducers';

export type Action = userActions.All;

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private afAuth: AngularFireAuth,
  ) { }

  @Effect()
  getUser: Observable<Action> = this.actions$
    .pipe(
      ofType(userActions.GET_USER),
      map((action: userActions.GetUser) => action.payload),
      mergeMap(_ => this.afAuth.authState),
      map(authData => {
        if (authData) {
          const user = new User(authData.uid, authData.displayName);
          return new userActions.Authenticated(user);
        } else {
          return new userActions.NotAuthenticated();
        }
      }),
      catchError(err => of(new userActions.AuthError({ error: err.message }))),
    );

  @Effect()
  loginWithGoogle: Observable<Action> = this.actions$
    .pipe(
      ofType(userActions.GOOGLE_LOGIN),
      map((action: userActions.GoogleLogin) => action.payload),
      mergeMap(_ => from(this.googleLogin())),
      map(credential => new userActions.GetUser()),
      catchError(err => of(new userActions.AuthError({ error: err.message })))
    );

  @Effect()
  logout: Observable<Action> = this.actions$
    .pipe(
      ofType(userActions.LOGOUT),
      map((action: userActions.Logout) => action.payload),
      mergeMap(_ => of(this.afAuth.auth.signOut())),
      map(_ => new userActions.NotAuthenticated()),
      catchError(err => of(new userActions.AuthError({ error: err.message })))
    );

  private googleLogin(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
