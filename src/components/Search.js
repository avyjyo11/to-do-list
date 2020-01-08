import React, { Component } from "react";
import "../styles/Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search-div">
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            fontSize: "16px"
          }}
          type="text"
          name="search"
          placeholder="Search ..."
          onChange={this.props.handleInput}
          value={this.props.searchText}
        />
      </div>
    );
  }
}

export default Search;
