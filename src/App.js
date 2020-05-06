import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const DEFAULT_ITEMS = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { tasks: DEFAULT_ITEMS, inputValue: "" };
  }
  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ inputValue: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { task: this.state.inputValue, id: Date.now(), completed: false },
        ],
        inputValue: "",
      });
    }
  };
  toggleCompleted = (itemId) => {
    this.setState({
      tasks: this.state.tasks.map((item) => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    });
  };
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return !item.completed;
      }),
    });
  };
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
          inputValue={this.state.inputValue}
        />
        <TodoList list={this.state.tasks} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
