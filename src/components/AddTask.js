import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.addingTask(this.state.title);
      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-task-div">
        <input
          style={{
            width: "90%",
            padding: "10px",
            border: "none",
            fontSize: "16px"
          }}
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Add a Task ..."
        />
        <input
          type="submit"
          value="Add Task"
          onClick={this.onSubmit}
          style={{
            backgroundColor: "teal",
            color: "#fff",
            padding: "5px",
            border: "none",
            fontSize: "14px"
          }}
        />
      </form>
    );
  }
}

export default AddTask;
