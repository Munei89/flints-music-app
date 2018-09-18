import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SearchBar from '../SearchBar/SearchBar';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-1">
        <nav className="navbar navbar-transparent navbar-absolute">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navigation-example"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Flints Music App
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navigation-example">
              <ul className="nav navbar-nav navbar-center">
                <li>
                  
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="page-header·header-filter"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                  <SearchBar />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(NavBar);
