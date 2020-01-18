import uuidv4 from 'uuid/v4';

export default class Todo {
  constructor({ title, description, dateDue }) {
    this.title = title;
    this.description = description;
    this.dateDue = dateDue;
    this.completed = false;
    this.id = uuidv4();
  }
}
