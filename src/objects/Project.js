import uuidv4 from 'uuid/v4';

export default class Project {
  constructor({ title }) {
    this.title = title;
    this.todos = [];
    this.id = uuidv4();
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}
