import React, { Component } from "react";

export default class imageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0,

      quote: ""

    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.addEventListener("load", this.setSpans));
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const easterEgg = "I am quitting my job in the month of April. On god. I am manifesting and putting it in the universe as well as multiverse of 1's and 0's"
    this.setState({quote: easterEgg})
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
