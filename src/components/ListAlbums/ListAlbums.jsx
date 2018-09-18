import React, { Component } from 'react';
import Album from '../Album/Album.jsx';
import Grid from '@material-ui/core/Grid';

class ListAlbums extends Component {
  dispAlbums() {
    if (typeof this.props.list !== 'undefined') {
      return this.props.list.map(album => {
        if (this.props.albumSelected !== null && this.props.albumSelected.id == album.id) {
          return (
            <Grid item md={3} key={album.id}>
              <Album onAlbumSelect={this.props.onAlbumSelect} album={album} />
            </Grid>
          );
        }
        else {
          return (
            <Grid item md={3} key={album.id}>
              <Album onAlbumSelect={this.props.onAlbumSelect} album={album} />
            </Grid>
          );
        }
      });
    }
  }

  render() {
    return (
      <Grid container spacing={8}>
        {this.dispAlbums()}
      </Grid>
    );
  }
}

export default ListAlbums;
