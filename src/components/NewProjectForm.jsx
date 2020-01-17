import React from 'react';
import PropTypes from 'prop-types';

import './NewProjectForm.scss';

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;
    const { onNewProjectSubmit } = this.props;

    // Check title is not empty
    if (title === '') return;

    onNewProjectSubmit(title);
    this.setState({
      title: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form className="c-new-project-form" onSubmit={this.handleSubmit}>
        <input
          className="c-new-project-form__text-field"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          placeholder="New Project"
        />
        <button className="c-new-project-form__submit" type="submit">
          <i className="fas fa-plus-circle" />
        </button>
      </form>
    );
  }
}

NewProjectForm.propTypes = {
  onNewProjectSubmit: PropTypes.func.isRequired,
};

export default NewProjectForm;
