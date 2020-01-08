import React, { Component } from "react";
import "../styles/Navigation.css";
import "../index.css";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      tabs: ["Home", "Completed", "Not Completed"],
      activeTab: [true, false, false]
    };
  }

  getStyle = (index) => {
    if (this.state.activeTab[index] === true) {
      return { borderTopColor: "teal", color: "teal" };
    } else {
      return { borderTopColor: "#fff", color: "#000" };
    }
  };

  settingTab = e => {
    this.props.getTab(e.target.innerHTML, this.state.tabs);
    this.setState({
     activeTab: this.state.activeTab.map((el, i) => {
        if (e.target.innerHTML === this.state.tabs[i]) {
          return true;
        } else {
          return false;
        }
      })
    });
  };

  render() {
    return (
      <div className="navbar">
        <ul className="clearfix" style={{ margin: "0 auto" }}>
          <li style={this.getStyle(0)} onClick={this.settingTab}>
            {this.state.tabs[0]}
          </li>
          <li style={this.getStyle(1)} onClick={this.settingTab}>
            {this.state.tabs[1]}
          </li>
          <li style={this.getStyle(2)} onClick={this.settingTab}>
            {this.state.tabs[2]}
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
