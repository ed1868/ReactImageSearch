import React, { Component } from 'react'
import './imageList.css'

export default class imageList extends Component {

  render(props) {
    let images = this.props.images;

    let imageList= images.map(({description ,id, urls} )=> {
      return <img className="column is-half" alt={description} key={id} src={urls.regular} />
    });
    return (
      <div>
        <div classNam="column" >{imageList}</div>
      </div>
    )
  }
}
