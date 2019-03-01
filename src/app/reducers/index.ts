import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromUser from './user.reducer';

/**
 * Export a state interface this wih build a state in storeModule.
 */
export interface State {
  user: fromUser.State,
};


/**
 * Export each reducer in application.
 */
export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Selectos for user State
 * Get current user in User State
 */
export const getUserState = createFeatureSelector<fromUser.State>(`user`);
export const selectGetCurrentUser = createSelector(
  getUserState,
  fromUser.selectCurrentUser
);

export const selectIsLoadingAuth = createSelector(
  getUserState,
  fromUser.selectLoadingAuth
);
