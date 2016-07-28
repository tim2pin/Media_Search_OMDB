import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx';
import MediaSearchInput from './MediaSearchInput.jsx';
import MediaSubmitButton from './MediaSubmitButton.jsx';
import globalStyles from './assets/styles/global.css';

var titleStyle = {
  backgroundImage: 'url(http://i.imgur.com/cxmrlvV.jpg)',
  display: "block",
  textAlign: "center",
  color: "whitesmoke",
  marginBottom: "30px",
  textShadow: "-1.5px 0 black, 0 1.5px black, 6.5px 0 black, 0 -1.5px black",
  fontSize: "80px",
  paddingTop: "184px",
  fontWeight: "bold",
  borderBottom: "1px solid black",
};

  /**
   * A stateful component to store our app
   */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchQueryValue:''
    };
  }
  handleSubmitButtonClick(e) {
    console.log('searchqueryvalue is', this.state.searchQueryValue);
    this.setState({query: this.state.searchQueryValue});
  }
  handleSearchInputChange(e) {
    console.log('searchqueryvalue is',this.state.searchQueryValue);
    this.setState({ searchQueryValue: e.target.value });
  }
  render() {
    return (
      <div>
        <div style={titleStyle}>OMDB Media Database </div>
        <MediaSearchInput OnSearchInputChange={this.handleSearchInputChange.bind(this)} />
        <MediaSubmitButton OnSubmitButtonClick={this.handleSubmitButtonClick.bind(this)} />
        <MediaFetcher query={this.state.query} />
      </div>
    )
  }
}

ReactDOM.render(
<App />,
document.getElementById('root')
);
