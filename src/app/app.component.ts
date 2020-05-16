import { Component } from '@angular/core';

interface Todo {
  createdAt: Date;
  task: string;
  isCompleted: boolean;
  completedAt?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];
  title = 'Todo App';
  task: string;
  private toBeUpdatedTodo: Todo;
  private toBeUpdatedTodoId: number;

  // marks all the TODO items as completed
  onClickCheckAll = () =>
    this.todos.forEach((todo: Todo) => (todo.isCompleted = true));

  // delete a task
  onClickDelete = (taskId: number) => this.todos.splice(taskId, 1);

  // add a task
  onClickAdd = () => {
    if (this.task && this.task.trim()) {
      this.toBeUpdatedTodo
        ? this.todos.splice(this.toBeUpdatedTodoId, 0, this.toBeUpdatedTodo)
        : this.todos.push({
            createdAt: new Date(),
            task: this.task,
            isCompleted: false,
          });

      this.task = null; // clear the input form
    }
  };

  // set task as completed
  onClickCompleteToggle = (taskId: number) => {
    const todo = this.todos.slice(taskId, taskId + 1)[0];
    todo.isCompleted = !todo.isCompleted;
  };
}
