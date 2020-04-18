import {
    LOGIN_PAGE_LOADED,
    LOGIN_PAGE_UNLOADED,
    UPDATE_FIELD_AUTH,
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch( action.type ){
        case LOGIN_PAGE_LOADED:
        case LOGIN_PAGE_UNLOADED:
            return {
                ...state,
                email: '',
                password: '',
                confirmPassword : '',
            }
        
        case UPDATE_FIELD_AUTH:
            return {
                ...state,
                [action.key] : action.value
            };
        default:
            return state;
    }
  }