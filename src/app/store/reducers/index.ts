import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromTodos from './todos.reducer';


export interface AppState {

  [fromTodos.todosFeatureKey]: fromTodos.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromTodos.todosFeatureKey]: fromTodos.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
