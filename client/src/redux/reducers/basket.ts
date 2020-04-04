import {
  SET_NEW_BASKET_ITEM
} from "../../constants";

const basketReducer =  ( state:any = [], action:any ) => {
  switch (action.type) {
    case SET_NEW_BASKET_ITEM:
      return [ ...state, action.payload ];
      break;
    default:
      return state;
  }
};

export default basketReducer;
