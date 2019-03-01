import { Component, OnInit } from '@angular/core';

import * as userActions from '../../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user$: Observable<User>;

  public isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromUser.State>
  ) { }

  ngOnInit() {
    this.user$ = this.store.pipe(
      select(fromUser.selectGetCurrentUser)
    );

    this.isLoading$ = this.store
      .pipe(
        select(fromUser.selectIsLoadingAuth)
      );
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }

}
