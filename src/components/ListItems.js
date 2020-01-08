import React, { Component } from "react";
import "../styles/ListItems.css";
import "../styles/index.css";

export class ListItems extends Component {
  getStyle = todo => {
    return todo.completed ? "list-item-check" : "list-item-uncheck";
  };

  render() {
    return this.props.todos.map((todo, index) => (
      <div className="clearfix todo-list" key={index}>
        <div className={this.getStyle(todo)}>{todo.title}</div>
        <div className="check-box clearfix">
          <input
            className="checkbox-style"
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, index)}
            checked={todo.completed}
          />
          <button
            className="delete-btn"
            onClick={this.props.deleteTask.bind(this, index)}
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }
}

export default ListItems;
