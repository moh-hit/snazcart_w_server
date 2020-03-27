import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const useStyles = makeStyles({
  root: {
    width: 230,
    maxWidth: 345,
    borderRadius: 4,
    padding: 10
  },
  media: {
    height: 150
  }
});

export default function SkeletonCard(props) {
  const classes = useStyles();

  return (
    <a href="/products">


    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          title="Product"
        />
        <CardContent>
          <div style={{ height: 30 }}>
            <Typography gutterBottom variant="caption" component="subtitle1">
              
            </Typography>
          </div>

          <div className="row px-3 justify-content-between">
            <Typography gutterBottom variant="p" component="p">
              ₹ 
            </Typography>
            <div>
              <StarBorderOutlinedIcon style={{fontSize: 15}} />
              <StarBorderOutlinedIcon style={{fontSize: 15}} />
              <StarBorderOutlinedIcon style={{fontSize: 15}} />
              <StarBorderOutlinedIcon style={{fontSize: 15}} />


            </div>
          </div>
        </CardContent>
      
      </CardActionArea>


    </Card>
  </a>
  );
}
