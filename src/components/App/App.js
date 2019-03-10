import React, { Component } from "react";
import unsplash from '../../Api/unsplashApi';
import ImageList from '../ImageList/imageList';

import "./App.css";
import SearchBar from "../SearchBar/searchBar";
class App extends Component {

  state = {
    images: []
  };

  onSearchSubmit = async(e) => {
   const apiResponse = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: e },

    }).then((response) => {
      this.setState({images: response.data.results});
    })
  };
  render() {
    return (
      <div>
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images = {this.state.images} />
          <div>
            <h2>Found: {this.state.images.length}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
