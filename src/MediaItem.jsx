import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var mediaItemContainer = {
  display: "block",
  paddingTop: "60px",
  width: "33%",
  textAlign: "center",
  borderTop: "1px solid grey",
  width: "100%",
  backgroundColor: "#f2f2f2",
};

var mediaTitle = {
  fontWeight: "bold",
  fontSize: "50px",
  color: "#737373",
  textDecoration: "none",
};

var mediaType = {
  fontSize: "40px",
  color: "#737373",
  paddingBottom: "50px",
};

export default class MediaItem extends Component {
  render() {
    // var url = `http://www.imdb.com/title/${this.props.id}`;
    return (
      <div style={mediaItemContainer}>
        <a href={`http://www.imdb.com/title/${this.props.id}`} style={mediaTitle}>{this.props.title} </a>
        <div style={mediaType}>{this.props.type} </div>
      </div>
    )
  }
}
