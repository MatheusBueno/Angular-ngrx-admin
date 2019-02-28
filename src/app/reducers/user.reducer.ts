import * as userActions from '../actions/user.actions';
import { User } from '../models/user.model';

export type Action = userActions.All;

const defaultState = new User(null, `Bueno`);

export function userReducer(
  state: User = defaultState,
  action: Action) {
  switch (action.type) {
    case userActions.GET_USER:
      return { ...state, loading: true };

    case userActions.AUTHENTICATED:
      return { ...state, ...action.payload, loading: false };

    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...defaultState, loading: false };

    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: false };

    case userActions.AUTH_ERROR:
      return { ...state, ...action.payload, loading: false };

    case userActions.LOGOUT:
      return { ...state, ...action.payload, loading: true };

    default:
      break;
  }
}