import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as actions from "../../../redux/actions";
import { useHistory } from "react-router-dom";



const CardComponent =  ({
    product,
    setNewBasketItem
}) => {
  const history = useHistory();

  const goToProductPage = () => {
    history.push(`/product/${product.id}`);
  };

  const cardStyle = {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

    return (
      <Card style={cardStyle}>
          <CardActionArea onClick={goToProductPage}>
              <CardMedia
                style={{objectFit:'contain'}}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={product.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontSize:'15px'}}>
                      {product.name}
                  </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary"  onClick={()=>{setNewBasketItem(1)}}>
                Add in basket
              </Button>
          </CardActions>
      </Card>
        )
};

const mapDispatchToProps = dispatch => {
  const { setNewBasketItem } = bindActionCreators(actions, dispatch);
  return {
    setNewBasketItem
  }
};

export default connect (null, mapDispatchToProps )(CardComponent);
