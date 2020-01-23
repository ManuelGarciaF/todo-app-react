import React from 'react';

import 'animate.css';
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

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('state')));
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  handleProjectChange(index) {
    this.setState({
      selectedProjectIndex: index,
    });
  }

  handleNewProject(title) {
    this.setState(({ projects }) => ({
      projects: [...projects, new Project({ title })],
      selectedProjectIndex: projects.length,
    }));
  }

  handleProjectRemove() {
    const { projects } = this.state;

    this.removeCurrentProject();

    if (projects.length <= 1) this.handleNewProject('New Project');
  }

  removeCurrentProject() {
    this.setState(({ projects, selectedProjectIndex }) => {
      projects.splice(selectedProjectIndex, 1);
      return {
        projects,
        // Make sure the index doesn't go under 0.
        selectedProjectIndex:
          selectedProjectIndex > 0 ? selectedProjectIndex - 1 : selectedProjectIndex,
      };
    });
  }

  handleNewTodo(todoData) {
    this.setState(({ projects, selectedProjectIndex }) => {
      projects[selectedProjectIndex].todos.push(new Todo(todoData));
      return {
        projects,
      };
    });
  }

  handleTodoToggleCompletion(index) {
    this.setState(({ projects, selectedProjectIndex }) => {
      const todo = projects[selectedProjectIndex].todos[index];
      todo.completed = !todo.completed;

      return {
        projects,
      };
    });
  }

  handleTodoRemove(index) {
    this.setState(({ projects, selectedProjectIndex }) => {
      projects[selectedProjectIndex].todos.splice(index, 1);
      return {
        projects,
      };
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
