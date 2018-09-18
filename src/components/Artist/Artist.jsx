import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: props.artist
    }
  }

  render() {
    return (
        <Card className="card" key={this.state.artist.id} onClick={() => this.props.onArtistSelect(this.state.artist)}>
          <CardActionArea>
            <CardMedia
              component="img"
              className="media"
              image={this.state.artist.picture_big}
              title={this.state.artist.name}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
              {this.state.artist.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" key={this.state.artist.id} onClick={() => this.props.onArtistSelect(this.state.artist)}>
              View
            </Button>
          </CardActions>
        </Card>
    );
  }
}

export default Artist;