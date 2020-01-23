import React from 'react';
import PropTypes from 'prop-types';

import './ProjectItem.scss';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onProjectChange, index } = this.props;
    onProjectChange(index);
  }

  render() {
    const { projectTitle, selectedProjectIndex, index } = this.props;
    const classes = `c-project-list__item animated fadeIn ${
      index === selectedProjectIndex ? 'is-selected' : ''
    }`;
    return (
      <li className={classes}>
        <button type="button" onClick={this.handleClick}>
          {projectTitle}
        </button>
        {index === selectedProjectIndex ? <i className="fas fa-circle fa-xs" /> : ''}
      </li>
    );
  }
}

ProjectItem.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  selectedProjectIndex: PropTypes.number.isRequired,
  onProjectChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectItem;
