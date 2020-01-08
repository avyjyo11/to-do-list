import React, { Component } from "react";
import Search from "./Search";
import EmptyDiv from "./EmptyDiv";
import Navigation from "./Navigation";
import ToDoList from "./ToDoList";
import "../styles/App.css";
import "../index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      searchText: "",
      activeTab: "Home"
    };
  }

  toggleComplete = index => {
    this.setState({
      todos: this.state.todos.map((todo, ind) => {
        if (ind === index) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTask = index => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  };

  addingTask = value => {
    this.setState({
      todos: [
        {
          title: value,
          completed: false
        },
        ...this.state.todos
      ]
    });
  };

  getTab = (activeTab, tabs) => {
    tabs.forEach(el => {
      if (activeTab === el) {
        this.setState({
          activeTab: el
        })
      }
    });
  };

  handleInput = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  filterData = (array = [], search = "") =>
    array.filter(value => value.title.includes(search));

  filterTab = (array = [], activeTab = 'Home') => {
    if (activeTab === "Home") {
      return array;
    } else if (activeTab === "Completed") {
      return array.filter(el => el.completed)
    } else {
      return array.filter(el => !el.completed);
    }
  };

  render() {
    return (
      <div>
        <div className="top-bar clearfix">
          <div className="wrapper">
            <div className="logo-div">To-Do List</div>
            <div className="navbar-div">
              <Navigation getTab={this.getTab} />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <Search
            handleInput={this.handleInput}
            searchText={this.state.searchText}
          />
          <div className="todo-list-div">
            <ToDoList
              todos={this.filterTab(this.filterData(this.state.todos, this.state.searchText), this.state.activeTab)}
              toggleComplete={this.toggleComplete}
              deleteTask={this.deleteTask}
              addingTask={this.addingTask}
            />
            <EmptyDiv numberList={this.state.todos.length} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//<Buttons classname="btn btn-blue" color="blue" name="Add Task" />
