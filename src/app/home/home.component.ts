import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Store, select } from '@ngrx/store';
import { addTodo, updateTodo, deleteTodo } from '../store/actions/todos.actions';
import { Todo } from '../store/models/todos.model';
import { selectTodos } from '../store/selectors/todos/todos.selectors';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store ) { }

  value = "";
  editValue = "";
  editTodoId = ""
  todos: { [key: string]: Todo} = {};

  get todoList() {
    let todos = Object.values(this.todos)
    
    todos = todos.sort((a: any, b: any) => a.time >= b.time ? -1 : 1)

    return todos
 }

  ngOnInit(): void {
    this.store.pipe(select(selectTodos)).subscribe(todos => {
      console.log({todos})
      this.todos = todos
    })
  }

  add() {
    if(!this.value) {
      return
    }

    const todo: Todo = {
      id: uuidv4(),
      value: this.value,
      time: new Date(),
    }
    this.store.dispatch(addTodo({ todo }));

    this.value = "";
  }

  edit(todo) {
    this.editTodoId = todo.id;
    this.editValue = todo.value;
  }

  remove(todo) {
    const { id } = todo
    this.store.dispatch(deleteTodo({id}))
  }

  save(todo: Todo, editValue) {
    const updatedTodo: Update<Todo> = { 
      id: todo.id, 
      changes: {
        value: editValue,
        time: new Date()
      }
    }
    this.store.dispatch(updateTodo({todo: updatedTodo }))

    this.cancel();
  }

  cancel() {
    this.editTodoId = "";
    this.editValue = ""
  }
}
