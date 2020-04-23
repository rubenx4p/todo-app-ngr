import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index'

export const selectTodos = (state: AppState) => state.todos.entities;

