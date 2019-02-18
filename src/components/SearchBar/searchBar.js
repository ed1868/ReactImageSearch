import React, { Component } from "react";

export default class searchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <form>
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                onChange={(event) => {console.log(event.target.value)}}
                placeholder="search away.."
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
