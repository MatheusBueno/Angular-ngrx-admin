import { Action } from '@ngrx/store';

export enum LoadingActionsType {
  CHANGE_LOADING = '[Loading Component] Change loading State',
}

export class ChangeLoadingComponent implements Action {
  readonly type = LoadingActionsType.CHANGE_LOADING;

  constructor(public payload: boolean) { }
}

export type LoadingComponentActions = ChangeLoadingComponent;