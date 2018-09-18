import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onChangeTerm(term) {
    this.setState({ term });
    this.props.onChangeTerm(term);
  }

  render() {
    return (
      <div>
        <input className="form-control searchbar"
        value={this.state.term}
        onChange={(event) => this.onChangeTerm(event.target.value)}
        placeholder="Search for an artist..."/>
      </div>
    );
  }
}

export default SearchBar;
