import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Navbar from './components/navbar/Navbar';

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
