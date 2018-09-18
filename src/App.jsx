import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ListAlbums from './components/ListAlbums/ListAlbums';
import ListArtists from './components/ListArtists/ListArtists';
import ListTracks from './components/ListTracks/ListTracks';
import SearchBar from './components/SearchBar/SearchBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const APP_ID = '300564';
const REDIRECT_URI = 'http://localhost:8080/';
const CORS = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      albums: [],
      tracks: [],
      albumSelected: null,
      artistSelected: null
    };

    this.token = '';
    this.url = `https://connect.deezer.com/oauth/auth.php?app_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&perms=basic_access,email`;
    this.token_array = window.location.hash.substr(1).split('&').map(function (element) {
      return (element.split('='));
    }).filter(function (element) {
      return (element[0] === 'access_token');
    })
    if (typeof this.token_array[0] !== 'undefined')
      this.token = this.token_array[0][1];
  }

  SearchDeezer(term) {
    fetch(
      `${CORS}http://api.deezer.com/search/artist?q=${term}`,
      {
        headers: {
          'Authorization': 'Bearer' + this.token
        }
      }
    )
      .then((response) => {
        return (response.json());
      })
      .then((result) => {
        this.setState({ artists: result.data });
      })
  }

  getAlbum(artist) {
    fetch(
      `${CORS}http://api.deezer.com/artist/${artist.id}/albums`,
      {
        headers: {
          'Authorization': 'Bearer' + this.token
        }
      }
    )
      .then((response) => {
        return (response.json());
      })
      .then((albums) => {
        console.log(albums)
        this.setState(
          {
            artistSelected: artist,
            albums: albums.data
          }
        );
      })
  }

  getTracks(album) {
    fetch(
      `${CORS}http://api.deezer.com/album/${album.id}/tracks`,
      {
        headers: {
          'Authorization': 'Bearer' + this.token
        }
      }
    )
      .then((response) => {
        return (response.json());
      })
      .then((tracks) => {
        console.log(tracks)
        this.setState(
          {
            albumSelected: album,
            tracks: tracks.data
          }
        );
      })
  }

  render() {
    return (
      <div className="App container">
        {(this.token === '') ?
          <a href={this.url}>
            <Button variant="contained" color="primary">
              Login
                </Button>
          </a>
          :
          (
            <div className="container">
              <SearchBar onChangeTerm={(term) => this.SearchDeezer(term)} />
              <ListArtists onArtistSelect={(artist) => this.getAlbum(artist)} list={this.state.artists} artistSelected={this.state.artistSelected} />
              <ListAlbums onAlbumSelect={(album) => this.getTracks(album)} list={this.state.albums} albumSelected={this.state.albumSelected} />
              <ListTracks list={this.state.tracks} />
            </div>
          )
        }
      </div>
    );
  }
}
export default hot(module)(App);
