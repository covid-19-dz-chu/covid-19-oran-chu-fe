import {
  LOGIN_PAGE_LOADED,
  LOGIN_PAGE_UNLOADED,
  UPDATE_FIELD_LOGIN,
  LOGIN_REQUESTED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch( action.type ){
    case LOGIN_PAGE_LOADED: 
      return {
        ...state,
      };
    
    case LOGIN_REQUESTED:
      return {
        ...state,
        loading : true,
      }
    
    case UPDATE_FIELD_LOGIN:
      return {
        ...state,
        [action.key] : action.value,
      };
      
    default:
      return state;
  }
}