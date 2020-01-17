import React from 'react';

import './App.scss';

import Project from './objects/Project';
import Todo from './objects/Todo';

import NewTodoCard from './components/NewTodoCard';
import TodoListCard from './components/TodoListCard';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleProjectChange = this.handleProjectChange.bind(this);
    this.handleNewProject = this.handleNewProject.bind(this);
    this.handleProjectRemove = this.handleProjectRemove.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleTodoToggleCompletion = this.handleTodoToggleCompletion.bind(this);
    this.handleTodoRemove = this.handleTodoRemove.bind(this);

    this.state = {
      projects: [new Project({ title: 'Default Project' })],
      selectedProjectIndex: 0,
    };
  }

  handleProjectChange(index) {
    this.setState({
      selectedProjectIndex: index,
    });
  }

  handleNewProject(title) {
    const { projects } = this.state;

    this.setState({
      projects: [...projects, new Project({ title })],
      selectedProjectIndex: projects.length,
    });
  }

  handleProjectRemove() {
    const { projects } = this.state;

    this.removeCurrentProject();
    if (projects.length === 0) {
      this.handleNewProject('New Project');
    }
  }

  removeCurrentProject() {
    const { projects, selectedProjectIndex } = this.state;

    projects.splice(selectedProjectIndex, 1);

    this.setState({
      projects,

      // Make sure the index doesn't go under 0.
      selectedProjectIndex:
        selectedProjectIndex > 0 ? selectedProjectIndex - 1 : selectedProjectIndex,
    });
  }

  handleNewTodo(todoData) {
    const { projects, selectedProjectIndex } = this.state;
    projects[selectedProjectIndex].addTodo(new Todo(todoData));

    this.setState({
      projects,
    });
  }

  handleTodoToggleCompletion(index) {
    const { projects, selectedProjectIndex } = this.state;
    projects[selectedProjectIndex].todos[index].toggleCompletion();

    this.setState({
      projects,
    });
  }

  handleTodoRemove(index) {
    const { projects, selectedProjectIndex } = this.state;
    projects[selectedProjectIndex].removeTodo(index);

    this.setState({
      projects,
    });
  }

  render() {
    const { projects, selectedProjectIndex } = this.state;
    return (
      <div className="l-container">
        <Sidebar
          projects={projects}
          selectedProjectIndex={selectedProjectIndex}
          handleProjectChange={this.handleProjectChange}
          handleNewProjectSubmit={this.handleNewProject}
        />
        <div className="l-card-grid">
          <TodoListCard
            handleTodoToggleCompletion={this.handleTodoToggleCompletion}
            handleTodoRemove={this.handleTodoRemove}
            handleProjectRemove={this.handleProjectRemove}
            project={projects[selectedProjectIndex]}
          />
          <NewTodoCard onNewTodo={this.handleNewTodo} />
        </div>
      </div>
    );
  }
}

export default App;
