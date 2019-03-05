import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromAuth from '../reducers/auth.reduce';
import * as fromLoading from '../reducers/loading.reducer';

/**
 * App State Interface.
 * Without features States.
 */
export interface State {
  auth: fromAuth.State,
  loadingComponent: fromLoading.State,
};

/**
 * App Reducers.
 */
export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  loadingComponent: fromLoading.reducer,
};


// Get auth State.
const getAthState = createFeatureSelector<fromAuth.State>('auth');

// Get Loading Component State
const getLoadingComponentState = createFeatureSelector<fromLoading.State>('loadingComponent');


/**
 * Selector to get Auth State.
 * Return a user case authenticated.
 */
export const selectAuth = createSelector(
  getAthState,
  fromAuth.getUser,
);

export const selectToken = createSelector(
  getAthState,
  fromAuth.getToken,
);

/**
 * Return state to show or hide loading component.
 */
export const selectIsShowLoadingComponent = createSelector(
  getLoadingComponentState,
  fromLoading.getShowCompoennt,
);
