import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }} style={{marginBottom: '20px', backgroundColor: '#C84B31'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.link} style={{color: '#191919', textDecoration: 'none', textDecorationColor: '#191919'}}>
        <Button size="small" style={{color: '#191919'}}>View..</Button>
        </a>
      </CardActions>
    </Card>
  );
}
