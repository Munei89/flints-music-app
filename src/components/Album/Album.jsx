import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album
    }
  }

  render() {
    return (
      <List component="nav">
        <ListItem button onClick={() => this.props.onAlbumSelect(this.state.album)} className="list-group-item" key={this.state.album.id}>
          <ListItemIcon>
            <img alt="" src={this.state.album.cover_small} />
          </ListItemIcon>
          <ListItemText primary={this.state.album.title} />
        </ListItem>
      </List>
    );
  }
}

export default Album;
