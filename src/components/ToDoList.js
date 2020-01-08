import React, { Component } from "react";
import ListItems from "./ListItems";
import AddTask from "./AddTask";

class ToDoList extends Component {
  render() {
    return (
      <div>
        <AddTask addingTask={this.props.addingTask} />
        <ListItems
          todos={this.props.todos}
          toggleComplete={this.props.toggleComplete}
          deleteTask={this.props.deleteTask}
        />
      </div>
    );
  }
}

export default ToDoList;
