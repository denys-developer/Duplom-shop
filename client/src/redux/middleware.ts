import {
  GET_ALL_PRODUCTS, GET_PRODUCT_DATA,
  url
} from '../constants';
import {
  setAllProducts,
  setProductData
} from './actions';
const axios = require('axios').default;

export const middleware = (store:any) => (next:any) => (action:any) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      axios.get(url + '/product')
        .then((response: any) => {
          store.dispatch( setAllProducts(response.data) );
        }).catch((error:any)=>{
          console.log(error);
      });
     return  next(action);
    case GET_PRODUCT_DATA:
      let id = action.payload;
     axios.post(url + '/product',{
       id
     }).then(( response:any )=>{

       let data = response.data;
      store.dispatch(setProductData(data));
     });

      return next(action);
    default:
      return next(action);
    }
};
