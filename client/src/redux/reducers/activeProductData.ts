import {
  SET_PRODUCT_DATA,
  DELETE_PRODUCT_DATA
} from "../../constants";

export default (state = null, action:any) => {
  switch (action.type) {
    case SET_PRODUCT_DATA:
      return {...action.payload};
      break;
    case DELETE_PRODUCT_DATA:
      return null;
     break;
    default:
      return state
  }
};
