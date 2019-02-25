import React, { Component } from 'react';

import './App.css';
import SearchBar from '../SearchBar/searchBar'
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <SearchBar />  
        </div>  
      </div>
    );
  }
}

export default App;
