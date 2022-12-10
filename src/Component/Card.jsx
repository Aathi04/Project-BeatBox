import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 100,
  },
  cover: {
    width: 100,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}
     style = {{boxShadow:"none"}}>
      <CardMedia
        className={classes.cover}
        image="ennaivittu.jpg"
        
      />
      <div className={classes.details}>
        <CardContent className={classes.content}
         style={{backgroundColor: ' #4B4848'}}>
          <Typography component="h6" variant="h6">
            Ennai Vittu
          </Typography>
          <Typography variant="subtitle1" color="black">
          Pradeep Ranganathan, YSR
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}