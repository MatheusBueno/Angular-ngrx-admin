import { ChangeLoadingComponent } from './../../../actions/loading.action';
import { LoginActionsType, LoginWithEmailSuccess, LoginWithEmail, LoginWithEmailFailure } from './../actions/login.actions';
import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginPageEffect {


  @Effect()
  login$ = this.actions$
    .pipe(
      ofType<LoginWithEmail>(LoginActionsType.LOGIN_WITH_EMAIL),
      map(action => action.payload),
      mergeMap(user =>
        (of(new ChangeLoadingComponent(true)),
          of()
            .pipe(
              map(auth => of(new LoginWithEmailSuccess(auth))),
              catchError(err => of(new LoginWithEmailFailure(err))),
            )
        )),
    );


  constructor(
    private actions$: Actions,
  ) { }
}