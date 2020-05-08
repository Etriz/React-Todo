import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const DEFAULT_ITEMS = [
  {
    task: "Make a To-Do List App",
    id: 1528817077286,
    completed: false,
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
      clearBtnDisabled: false,
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
      this.setState({
        todos: [
          ...this.state.todos,
          { task: this.state.inputValue, id: Date.now(), completed: false },
        ],
        inputValue: "",
      });
    }
  };
  addToLocalStorage = () => {
    const listItems = this.state.todos;
    // console.warn("add these to storage", listItems);
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
      () => this.allowClearBtnClick()
    );
  };
  clearCompleted = (e) => {
    e.preventDefault();
    if (!this.state.clearBtnDisabled) {
      this.setState({
        todos: this.state.todos.filter((item) => {
          return !item.completed;
        }),
      });
    }
  };
  allowClearBtnClick = () => {
    let completedItem = (item) => item.completed === true;
    if (this.state.todos.map(completedItem)) {
      this.setState({ clearBtnDisabled: false });
    } else this.setState({ clearBtnDisabled: true });
  };
  // this is equalivant to useEffect hook
  componentDidUpdate(prevState) {
    if (prevState.todos !== this.state.todos) {
      this.addToLocalStorage();
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Things To Do Today</h1>
        <TodoForm
          clearBtnDisabled={this.state.clearBtnDisabled}
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
