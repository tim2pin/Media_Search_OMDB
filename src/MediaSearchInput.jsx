import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var mediaSearchLabel = {
  color: "whitesmoke",
  fontSize: "30px",
  display: "block",
  textAlign: "center",
  textShadow: "-.5px 0 black, 0 0.5px black, 1px 0 black, 0 -.5px black",
};

var searchBox = {
  height: "35px",
  width: "400px",
  textAlign: "center",
  marginTop: "10px",
  marginBottom: "25px",
};

export default class MediaSearchInput extends Component {
  render() {
    return (
      <label style={mediaSearchLabel}>Enter Title: <br />
        <input style={searchBox} type="text" placeholder="Example: Pulp Fiction" onChange={this.props.OnSearchInputChange} />
      </label>
    )
  }
}
