import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    padding: 10,
    border: '1px solid lightGrey',
    width: 250  
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 50
  },

}));


export default function SellerCard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Card className={classes.root}>
      <CardMedia
          className={classes.cover}
          image="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"
          title="Seller Profile"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          </CardContent>
         
        </div>
        
      </Card>
    </div>
  );
}
