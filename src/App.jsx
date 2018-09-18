import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ListAlbums from './components/ListAlbums/ListAlbums';
import ListTracks from './components/ListTracks/ListTracks';
import Navbar from './components/Navbar/Navbar';

const APP_ID = '300564';
const REDIRECT_URI = 'http://localhost:3000';
const CORS = "https://cors-anywhere.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="profile-info">
          <div className="profile-name">Artist Name</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
