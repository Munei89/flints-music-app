import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div>Navigation</div>
        <div className="profile-info">
          <div className="profile-name">Artist Name</div>
        </div>
      </div>
    );
  }
}

export default hot(module)(NavBar);
