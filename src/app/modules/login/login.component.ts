import { Component, OnInit } from '@angular/core';

import * as userActions from '../../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState {
  user: User;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user$: Observable<User>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.user$ = this.store.select(`user`);

    this.store.dispatch(new userActions.GetUser());
  }

  googleLogin() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }

}
