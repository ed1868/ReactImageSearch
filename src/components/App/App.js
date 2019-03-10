import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchBar from '../SearchBar/searchBar'
class App extends Component {
  onSearchSubmit= (e) =>{
    console.log(e); 
  }
  render() {
    return (
      <div>
        <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit}/>  
        </div>  
      </div>
    );
  }
}

export default App;
