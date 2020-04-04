import {
  SET_NEW_PODUCTS ,
  SET_ALL_PRODUCTS
} from "../../constants";

 const productReducer =  ( state:any = [], action:any ) => {
  switch (action.type) {
    case SET_NEW_PODUCTS:
      return [ ...state, action.payload ];
      break;
    case SET_ALL_PRODUCTS:
      return [ ...action.payload ];
      break;
    default:
      return state;
  }
};

export default productReducer;
