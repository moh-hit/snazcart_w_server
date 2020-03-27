import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const useStyles = makeStyles({
  root: {
    width: "18%",
    // maxWidth: 345,
    borderRadius: 4,
    margin: 10
  },
  media: {
    height: 150
  }
});

export default function MainProductsCard(props) {
  const classes = useStyles();

  return (


    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.source}
          title="Product"
        />
        <CardContent>
          <div style={{ height: 30 }}>
            <Typography gutterBottom variant="caption" component="subtitle1">
              {props.name}
            </Typography>
          </div>

          <div className="row px-3 justify-content-between">
            <Typography gutterBottom variant="p" component="p">
              ₹ {props.price}
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
  );
}
