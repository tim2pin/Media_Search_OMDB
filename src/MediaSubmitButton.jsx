import React, {Component} from 'react';
import ReactDOM from 'react-dom';

var searchButton = {
  boxShadow: 'rgba(0,0,0,1) 0 1px 0',
  height: "45px",
  width: "195px",
  color: "whitesmoke",
  background: '-webkit-gradient(linear, left top, left bottom, from(#dbdbdb), to(#000000))',
  margin: "auto",
  display: "block",
  marginBottom: "80px",
  borderTop: '1px solid #c9c9c9',
  padding: "8px, 16px",
  borderRadius: "40px",
  fontSize: '22px',
  fontFamily: 'Nunito',
};

export default class MediaSubmitButton extends Component {
  render() {
    return (
      <input style={searchButton} type="button" value="Search" onClick={this.props.OnSubmitButtonClick}  />
    )
  }
}
