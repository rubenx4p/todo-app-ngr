import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../models/todos.model';

export const loadTodos = createAction(
  '[Todos/API] Load Todos', 
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todos/API] Add Todo',
  props<{ todo: Todo }>()
);

export const upsertTodo = createAction(
  '[Todos/API] Upsert Todo',
  props<{ todos: Todo }>()
);

export const addTodos = createAction(
  '[Todos/API] Add Todos',
  props<{ todos: Todo[] }>()
);

export const upsertTodos = createAction(
  '[Todos/API] Upsert Todos',
  props<{ todos: Todo[] }>()
);

export const updateTodo = createAction(
  '[Todos/API] Update Todo',
  props<{ todo: Update<Todo> }>()
);

export const updateTodos = createAction(
  '[Todos/API] Update Todos',
  props<{ todos: Update<Todo>[] }>()
);

export const deleteTodo = createAction(
  '[Todos/API] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodos = createAction(
  '[Todos/API] Delete Todos',
  props<{ ids: string[] }>()
);

export const clearTodos = createAction(
  '[Todos/API] Clear Todos'
);
