import { LoadingComponentActions } from './../actions/loading.action';
import { LoadingActionsType } from '../actions/loading.action';

export interface State {
  showComponent: boolean,
};

export const defaultState: State = {
  showComponent: false,
};

export function reducer(
  state: State = defaultState,
  action: LoadingComponentActions,
) {
  switch (action.type) {
    case LoadingActionsType.CHANGE_LOADING:
      return { ...state, showComponent: action.payload };

    default:
      return state;
  }
}

export const getShowCompoennt = (state: State) => state.showComponent;