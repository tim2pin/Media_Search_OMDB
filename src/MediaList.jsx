import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaItem from './MediaItem.jsx';


export default class MediaList extends Component {
  render() {
    return (
             <div>
               {this.props.media.map(function(item) {
                 return (
                  <MediaItem title={item.Title} type={item.Type.toUpperCase()} img={item.Poster} id={item.imdbID} />
                 )
               })}
             </div>
    )
  }
}
