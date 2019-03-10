import React, { Component } from "react";

export default class searchBar extends Component {
  state = {
    term: ''  
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.term);

    this.props.onSubmit(this.state.term);

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui segment">
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                value = {this.state.term}
                onChange={(e) => {this.setState({term : e.target.value})}}
                placeholder="search away.."
              />
            </div>
          </div>
        </form>
      </div>
      
    );
  }
}



//cuanduf -- whats new?       qua do nuff

// conagh -----> cabron

// ca va ----> whats up 

// como ca va -----> how are you doing ?


// e tua ---> and you ? 

/// merci bocu ---> that you very mucho


// j'ai faim - im hungryx