import { SET_STATE_SIDEBAR } from '../../constants';
const sideBarReducer = ( state : boolean = false, action:any ) => {
  switch (action.type) {
   case SET_STATE_SIDEBAR:
     return !state;
     break;
   default:
     return state;
 }
};
export default sideBarReducer;
