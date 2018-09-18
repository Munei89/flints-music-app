import React, { Component } from 'react';
import Album from '../Album/Album.jsx';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

class ListAlbums extends Component {
  dispAlbums() {
    if (typeof this.props.list !== 'undefined') {
      return this.props.list.map(album => {
        if (this.props.albumSelected !== null && this.props.albumSelected.id == album.id) {
          return (
            <ListItem button>
              <ListItemText primary={<Album onAlbumSelect={this.props.onAlbumSelect} key={album.id} album={album} />} />
            </ListItem>
          );
        }
        else {
          return (
            <ListItem button>
              <ListItemText primary={<Album onAlbumSelect={this.props.onAlbumSelect} key={album.id} album={album} />} />
            </ListItem>
          );
        }
      });
    }
  }

  render() {
    return (
      <List component="nav">

        {this.dispAlbums()}

      </List>
    );
  }
}

export default ListAlbums;
