import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';



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
        <Input
          value={this.state.term}
          onChange={(event) => this.onChangeTerm(event.target.value)}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
        <Button variant="contained" size="small" aria-label="Add" onClick={(event) => this.onChangeTerm(event.target.value)}>
          Search
        </Button>
      </div>
    );
  }
}

export default SearchBar;
