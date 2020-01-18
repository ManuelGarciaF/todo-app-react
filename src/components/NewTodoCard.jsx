import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './formComponents.scss';
import './NewTodoCard.scss';

class NewTodoCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      dateDue: new Date(),
    };
  }

  handleDateChange(date) {
    this.setState({
      dateDueRaw: date,
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title, description, dateDue } = this.state;
    const { onNewTodo } = this.props;

    // Check title is not empty
    if (title === '') return;

    onNewTodo({
      title,
      description,
      dateDue,
    });

    this.setState({
      title: '',
      description: '',
      dateDue: new Date(),
    });
  }

  /* eslint-disable jsx-a11y/label-has-associated-control */
  render() {
    const { title, description, dateDue } = this.state;

    return (
      <div className="c-card c-new-todo-card">
        <h2>New Todo</h2>
        <form className="c-new-todo-card__form" onSubmit={this.handleSubmit}>
          <input
            className="c-form__text"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleTitleChange}
            maxLength="40"
          />
          <textarea
            className="c-form__text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleDescriptionChange}
            cols="30"
            rows="10"
          />
          <label className="c-form__date">
            <span>Date Due:</span>
            <DatePicker selected={dateDue} onChange={this.handleDateChange} minDate={new Date()} />
          </label>
          <input className="c-form__submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

NewTodoCard.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodoCard;
