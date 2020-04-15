import {
  LOGIN_PAGE_LOADED,
  LOGIN_PAGE_UNLOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch( action.type ){
    case LOGIN_PAGE_LOADED: 
      return {};

    case LOGIN_PAGE_UNLOADED: 
      return {};

    default:
      return state;
  }
}