import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from 'react-player'

const useStyles = makeStyles({
  root: {
    width: "16%",
    // maxWidth: 345,
    borderRadius: 4,

  },
  media: {
    height: 150
  }
});


export default function LearnVideoCard(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardActionArea>
    <ReactPlayer url='https://snazcartassets.s3.ap-south-1.amazonaws.com/web/videos/1.mp4'  width="100%" height="250" controls="true" />
      <CardContent>
        <div style={{ height: 30 }}>
          <Typography gutterBottom variant="subtitle2" component="subtitle1">
            {props.name}
          </Typography>
        </div>

        <div className="row px-3 justify-content-between">
          <Typography gutterBottom variant="caption" component="a">
            {props.author}
          </Typography>
          <Typography gutterBottom variant="caption" component="a">
            {props.views} views
          </Typography>

        </div>
      </CardContent>
    </CardActionArea>

  </Card>
  );
}
