import React, { Component } from 'react'

export default class imageList extends Component {

  render(props) {
    let images = this.props.images;

    let imageList= images.map(image => {
      let url = image.urls.full;
      return <img src={url} />
    });
    return (
      <div>
        <div>{imageList}</div>
      </div>
    )
  }
}
