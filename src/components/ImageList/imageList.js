import React, { Component } from "react";
import "./imageList.css";
import ImageCard from "../ImageCard/imageCard";
export default class imageList extends Component {
  render(props) {
    let images = this.props.images;

    let imageList = images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div>
        <div className="column">{imageList}</div>
      </div>
    );
  }
}
