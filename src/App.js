import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const DEFAULT_ITEMS = [
  {
    task: "Make a To-Do List App",
    id: 1528817077286,
    completed: true,
  },
  {
    task: "???",
    id: 1528817084359,
    completed: false,
  },
  {
    task: "Profit",
    id: 1528817084368,
    completed: false,
  },
];
const storageListData = localStorage.getItem("listData");
const initStorageListData = storageListData ? [...JSON.parse(storageListData)] : DEFAULT_ITEMS;
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: initStorageListData,
      inputValue: "",
    };
  }
  handleChange = (e) => {
    if (e.target.value) {
      this.setState({ inputValue: e.target.value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue) {
      this.setState(
        {
          todos: [
            ...this.state.todos,
            { task: this.state.inputValue, id: Date.now(), completed: false },
          ],
          inputValue: "",
        },
        () => this.addToLocalStorage()
      );
    }
  };
  addToLocalStorage = () => {
    const listItems = this.state.todos;
    console.warn("add these to storage", listItems);
    localStorage.setItem("listData", JSON.stringify(listItems));
  };
  toggleCompleted = (itemId) => {
    this.setState(
      {
        todos: this.state.todos.map((item) => {
          if (itemId === item.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      },
      () => this.addToLocalStorage()
    );
  };
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState(
      {
        todos: this.state.todos.filter((item) => {
          return !item.completed;
        }),
      },
      () => this.addToLocalStorage()
    );
  };
  render() {
    return (
      <div className="container">
        <h1>Things To Do Today</h1>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
          inputValue={this.state.inputValue}
        />
        <TodoList list={this.state.todos} toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
}

export default App;
