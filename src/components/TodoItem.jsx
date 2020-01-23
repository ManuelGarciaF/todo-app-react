import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Checkbox from './Checkbox';

import Todo from '../objects/Todo';

import './TodoItem.scss';

const TodoItem = (props) => {
  const { index, handleTodoToggleCompletion, handleTodoRemove } = props;
  const { todo } = props;
  return (
    <li className="c-todo-item animated fadeIn">
      <div className="c-todo-item__header">
        <Checkbox
          onChange={() => {
            handleTodoToggleCompletion(index);
          }}
          title={todo.title}
          checked={todo.completed ? 'checked' : ''}
        />
        {todo.completed ? (
          <button
            className="c-todo-item__remove"
            type="button"
            onClick={() => {
              handleTodoRemove(index);
            }}
          >
            <i className="fas fa-times" />
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="c-todo-item__description">
        <p>{todo.description}</p>
        <small>
          {`Due ${moment(todo.dateDue)
            .endOf('day')
            .fromNow()}`}
        </small>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Todo).isRequired,
  index: PropTypes.number.isRequired,
  handleTodoToggleCompletion: PropTypes.func.isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
};

export default TodoItem;
