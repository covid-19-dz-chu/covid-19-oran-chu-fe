import {
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
  LOGIN_REQUESTED,
  VALIDATE_FIELDS_LOGIN,
  ASYNC_START,
  ASYNC_END,
} from '../utils/constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_PAGE_LOADED:
      return {
        ...state,
        loading: false,
        email: '',
        password: '',
      };
    case ASYNC_START:
      if( action.subtype === LOGIN_REQUESTED ){
        return {
          ...state,
          loading:true,
        };
      }
      return {
        ...state,
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        formErrors: null,
        loading: false,
        submitErrors: action.payload.error || null,
      };
    case UPDATE_FIELD_LOGIN:
      return {
        ...state,
        [action.key]: action.value,
      };
    case VALIDATE_FIELDS_LOGIN:
      return {
        ...state,
        submitErrors: null,
        formErrors: action.payload.errors || null,
      };
    default:
      return state;
  }
};
