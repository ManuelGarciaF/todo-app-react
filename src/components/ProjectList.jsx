import React from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';

import './ProjectList.scss';

const ProjectList = (props) => {
  const { projects, selectedProjectIndex, onProjectChange } = props;
  return (
    <div className="c-project-list">
      <h2>Projects</h2>
      <ul className="c-project-list__list">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index}
            selectedProjectIndex={selectedProjectIndex}
            projectTitle={project.title}
            onProjectChange={onProjectChange}
          />
        ))}
      </ul>
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedProjectIndex: PropTypes.number.isRequired,
  onProjectChange: PropTypes.func.isRequired,
};

export default ProjectList;
