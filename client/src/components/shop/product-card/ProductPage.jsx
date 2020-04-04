import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as actions from '../../../redux/actions';
import CircularProgress from "@material-ui/core/CircularProgress";
import productsNames from './productsNames';

const style = {
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems: 'center'
  }
};

class ProductPage extends React.Component {
 constructor(props) {
   super(props);
 }
 componentWillMount() {
  let id = this.props.match.params.id;
  this.props.getProductData(id);
 };

 componentWillUnmount() {
   this.props.deleteProductData();
 }

  render() {

  if(!this.props.data){
     return <CircularProgress />
  } else {
    let {
      name,
      img
    } = this.props.data;

    let data = this.props.data;
    let settings = [];

    for(var key in data){
      if(productsNames[key]){
        settings.push({
           key: productsNames[key],
           value: data[key]
          });
      }
    }

    return(
      <div style={style.container}>
        <h1>{name}</h1>
        <img src={img}/>
        {settings.map((item) => (
          <div>{item.key} : {item.value}</div>
        ))}
      </div>
    )}}
};

const mapStateToProps = state => ({
 data : state.activeProduct
});

const mapDispatchToProps = dispatch => {
   const {
     getProductData,
     deleteProductData
   }  = bindActionCreators(actions,dispatch);
   return {
     getProductData,
     deleteProductData
   }
};

export default connect(mapStateToProps , mapDispatchToProps )(ProductPage);
