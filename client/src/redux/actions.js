import {
  GET_ALL_PRODUCTS,
  SET_ALL_PRODUCTS,
  SET_NEW_BASKET_ITEM,
  SET_STATE_SIDEBAR,
  GET_PRODUCT_DATA, SET_PRODUCT_DATA, DELETE_PRODUCT_DATA
} from '../constants';
export const setAuthState = (state) => {
    return {
        type: 'AUTH_STATE',
        state: state
    }
};

export const setAllProducts = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        payload: products
    }
};

export const getAllProducts = () => {
    return {
        type: GET_ALL_PRODUCTS,
    }
};

export const setStateSideBar = () => {
  return {
      type: SET_STATE_SIDEBAR
  }
};

export const setNewBasketItem = (index) => {
  return {
      type: SET_NEW_BASKET_ITEM,
      payload: index
  }
};

export const getProductData = (id) => {
  return {
    type: GET_PRODUCT_DATA,
    payload: id
  }
};

export const setProductData = (data) => {
  return {
    type: SET_PRODUCT_DATA,
    payload: data
  }
};

export const deleteProductData = () => {
  return {
    type : DELETE_PRODUCT_DATA
  };
};
