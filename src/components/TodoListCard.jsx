import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

import './TodoListCard.scss';

const TodoListCard = (props) => {
  const {
    project, handleTodoToggleCompletion, handleTodoRemove, handleProjectRemove,
  } = props;

  return (
    <div className="c-card c-todo-list-card">
      <div className="c-todo-list-card__header">
        <h2>{project.title}</h2>
        <button type="button" onClick={handleProjectRemove}>
          <i className="fas fa-trash" />
        </button>
      </div>
      <ul className="c-todo-list-card__list">
        {project.todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            handleTodoToggleCompletion={handleTodoToggleCompletion}
            handleTodoRemove={handleTodoRemove}
          />
        ))}
      </ul>
    </div>
  );
};

TodoListCard.propTypes = {
  project: PropTypes.isRequired,
  handleTodoToggleCompletion: PropTypes.func.isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
  handleProjectRemove: PropTypes.func.isRequired,
};

export default TodoListCard;
