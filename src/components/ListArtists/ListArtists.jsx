import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Artist from '../Artist/Artist.jsx';

class ListArtists extends Component {
  dispArtists() {
    if (typeof this.props.list !== 'undefined')
    {
      return this.props.list.map(artist => {

        if (this.props.artistSelected !== null && this.props.artistSelected.id === artist.id) {
          return (
            <Grid key={artist.id} item md={4}>
              <Artist onArtistSelect={this.props.onArtistSelect} artist={artist}/>
           </Grid>
          );
        } else {
          return (
            <Grid key={artist.id} item md={4}>
              <Artist onArtistSelect={this.props.onArtistSelect} artist={artist}/>
            </Grid>
          );
        }
      });
    }
  }

  render() {
    return (  
      <Grid container spacing={16}>
          {this.dispArtists()}
      </Grid>          
    );
  }
}

export default ListArtists;
