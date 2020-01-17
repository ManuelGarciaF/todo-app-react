import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';

import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';

const Sidebar = (props) => {
  const {
    projects, selectedProjectIndex, handleProjectChange, handleNewProjectSubmit,
  } = props;
  return (
    <div className="c-sidebar">
      <h1>Todo App</h1>
      <ProjectList
        projects={projects}
        selectedProjectIndex={selectedProjectIndex}
        onProjectChange={handleProjectChange}
      />
      <NewProjectForm onNewProjectSubmit={handleNewProjectSubmit} />
    </div>
  );
};

Sidebar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedProjectIndex: PropTypes.number.isRequired,
  handleProjectChange: PropTypes.func.isRequired,
  handleNewProjectSubmit: PropTypes.func.isRequired,
};

export default Sidebar;
