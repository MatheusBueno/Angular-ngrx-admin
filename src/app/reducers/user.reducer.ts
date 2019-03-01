import * as userActions from '../actions/user.actions';
import { User } from '../models/user.model';

export type Action = userActions.All;

export interface State {
  user: User | null;
  loading: boolean;
}

export const defaultState = {
  user: null,
  loading: false,
};

export function reducer(
  state: State = defaultState,
  action: Action) {
  switch (action.type) {
    case userActions.GET_USER:
      return { ...state, loading: true };

    case userActions.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };

    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...defaultState, loading: false };

    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: true };

    case userActions.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case userActions.LOGOUT:
      return { ...state, ...action.payload, loading: true };

    default:
      return state;
  }
}

export const selectCurrentUser = (state: State) => state.user;

export const selectLoadingAuth = (state: State) => state.loading;