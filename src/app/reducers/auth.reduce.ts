import { AuthAction, AuthActionType } from './../actions/auth.actions';

export interface State {
  user: null | any;
  token: string;
}

export const defaultState: State = {
  user: null,
  token: ``,
};

export function reducer(
  state: State = defaultState,
  action: AuthAction,
) {
  switch (action.type) {
    case AuthActionType.ADD_AUTH_USER:
      return { ...state, user: action.payload.user };

    case AuthActionType.REMOVE_AUTH_USER:
      return { ...state, user: null, token: '' };

    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
export const getToken = (state: State) => state.token;