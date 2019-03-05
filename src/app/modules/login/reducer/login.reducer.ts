import { LoginActions, LoginActionsType } from '../actions/login.actions';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  loading: boolean,
  error?: any;
}

export const defaultState: State = {
  loading: false,
  error: null,
}

export function reducer(
  state: State = defaultState,
  action: LoginActions,
) {
  switch (action.type) {
    case LoginActionsType.LOGIN_WITH_EMAIL:
      return { ...state, loading: true };

    case LoginActionsType.LOGIN_WITH_EMAIL_SUCCESS:
      return { ...state, loading: false, error: null };

    case LoginActionsType.LOGIN_WITH_EMAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

const getLoginPageState = createFeatureSelector<State>('loginPage');

export const isLoadingState = (state: State) => state.loading;

export const selectErrorLogin = (state: State) => state.error;

export const selectIsLoading = createSelector(
  getLoginPageState,
  isLoadingState,
)