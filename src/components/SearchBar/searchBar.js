import React, { Component } from "react";

export default class searchBar extends Component {
  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <input
              className="input is-info"
              type="text"
              placeholder="Info input"
            />
            
          </div>
        </div>
      </div>
    );
  }
}
