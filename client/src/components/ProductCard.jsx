import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
 root: {
  maxWidth: 345,
 },
 media: {
  height: 140,
 }
});

const ProductCard = (props) => {
 const classes = useStyles();
 return (
  <Card className={classes.root}>
   <CardActionArea>
    <CardMedia
     component="img"
     alt="img not found"
     height="auto"
     image={props.img}
     title={props.title}
    />
    <CardContent>
     <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
     <Typography variant="body2" color="textPrimary" component="p">{props.currentId} {props.price}</Typography>
     <Typography variant="body2" color="textPrimary" component="p">Stock: {props.availableQuantity}</Typography>
     <Typography variant="body2" color="textPrimary" component="p">Condición: {props.condition === 'new' ? 'Nuevo' : 'Usado'}</Typography>
    </CardContent>
   </CardActionArea>
  </Card>
 );
};

export default ProductCard;