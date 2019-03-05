import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromIndex from './reducers/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-admin';

  public showLoading$: Observable<boolean>;

  constructor(private store: Store<fromIndex.State>) { }

  ngOnInit() {
    this.showLoading$ = this.store
      .pipe(
        select(fromIndex.selectIsShowLoadingComponent),
      );
  }
}
