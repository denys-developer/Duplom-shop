import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "../product-card/Card";

const Catalog = ({ products }) => {
  if(products) {
    return products.map( product => {
         return  <Card product = {product}/>
        })}
  return(
    <CircularProgress />
  )
};

const mapStateToProps = ( state ) =>({
  products: state.products
});

export default connect( mapStateToProps )( Catalog );
