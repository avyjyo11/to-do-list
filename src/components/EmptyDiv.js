import React, { Component } from "react";

class EmptyDiv extends Component {
  render() {
    const display = this.props.numberList === 0 ? true : false;
    return display ? (
      <div
        style={{
          backgroundColor: "#fff",
          color: "#999",
          padding: "40px 20px",
          borderBottom: "1px solid #000",
          textAlign: "center"
        }}
      >
        You don't have any tasks yet. Add a new task.
      </div>
    ) : (
      <div></div>
    );
  }
}

export default EmptyDiv;
