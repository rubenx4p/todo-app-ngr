import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models/todos.model';
import * as TodosActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(TodosActions.addTodo,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodosActions.upsertTodo,
    (state, action) => adapter.upsertOne(action.todos, state)
  ),
  on(TodosActions.addTodos,
    (state, action) => adapter.addMany(action.todos, state)
  ),
  on(TodosActions.upsertTodos,
    (state, action) => adapter.upsertMany(action.todos, state)
  ),
  on(TodosActions.updateTodo,
    (state, action) => adapter.updateOne(action.todo, state)
  ),
  on(TodosActions.updateTodos,
    (state, action) => adapter.updateMany(action.todos, state)
  ),
  on(TodosActions.deleteTodo,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TodosActions.deleteTodos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TodosActions.loadTodos,
    (state, action) => adapter.setAll(action.todos, state)
  ),
  on(TodosActions.clearTodos,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
