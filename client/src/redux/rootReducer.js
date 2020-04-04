import { combineReducers } from 'redux';
import auth from './reducers/auth';
import products from './reducers/products';
import sideBar from './reducers/sidebar';
import basket from './reducers/basket';
import activeProduct from './reducers/activeProductData';

export default combineReducers({
  auth,
  products,
  sideBar,
  basket,
  activeProduct
});
