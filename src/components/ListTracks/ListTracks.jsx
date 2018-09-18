import React, { Component } from 'react';
import Track from '../Track/Track.jsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ListTracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackSelected: null
    };

    this.player = new Audio;
  }

  dispTracks() {
    if (typeof this.props.list !== 'undefined') {
      return this.props.list.map(track => {
        return (
          <Track onTrackSelected={track => this.play(track)} key={track.id} track={track} />
        );
      });
    }
  }

  play(track) {
    this.player.src = track.preview;
    this.player.load();
    this.player.play();
  }

  render() {
    return (
      <Table>
        <TableBody>
            {this.dispTracks()}
        </TableBody>
      </Table>
    );
  }
}

export default ListTracks;
