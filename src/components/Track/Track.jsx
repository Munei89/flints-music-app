import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';

class Track extends Component {
  constructor(props) {
    super(props);

    this.state = {
      track: props.track
    };
  }

  render() {
    return (
      <TableRow onClick={event => this.props.onTrackSelected(this.state.track)} key={this.state.track.id}>
        <TableCell>{this.state.track.title}</TableCell>
      </TableRow>
    );
  }
}

export default Track;
