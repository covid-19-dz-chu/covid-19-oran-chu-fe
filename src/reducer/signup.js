import {
    SIGNUP_PAGE_LOADED,
    SIGNUP_PAGE_UNLOADED,
    UPDATE_FIELD_SIGNUP,
    SIGNUP_REQUESTED,
    VALIDATE_FIELDS_SIGNUP,
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch( action.type ){
        case SIGNUP_PAGE_LOADED:
            return {
                ...state,
            }
        
        case SIGNUP_REQUESTED:
            return {
                 ...state,
                 loading : true,
            }
        
        case VALIDATE_FIELDS_SIGNUP:
            return {
                ...state,
                errors: action.errors
            }
        case UPDATE_FIELD_SIGNUP:
            return {
                ...state,
                [action.key] : action.value,
            };
        default:
            return state;
    }
  }