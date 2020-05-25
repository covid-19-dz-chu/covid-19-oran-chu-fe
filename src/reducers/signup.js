import {
  SIGNUP_PAGE_LOADED,
  //   SIGNUP_PAGE_UNLOADED,
  UPDATE_FIELD_SIGNUP,
  SIGNUP_REQUESTED,
  VALIDATE_FIELDS_SIGNUP,
  ASYNC_START,
} from '../utils/constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_PAGE_LOADED:
      return {
        ...state,
        laoding: false,
        email: '',
        password: '',
        confirmPassword: '',
      };
    case ASYNC_START:
      if( action.subtype === 'SIGNUP_REQUESTED' ){
        return {
          ...state,
          loading: true,
        };
      }
      return {
        ...state,
      };
    case SIGNUP_REQUESTED:
      return {
        ...state,
        loading: false,
        submitErrors: action.error ? action.payload.response.data : null,
      };

    case VALIDATE_FIELDS_SIGNUP:
      return {
        ...state,
        formErrors: action.payload.errors || null,
      };
    case UPDATE_FIELD_SIGNUP:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
 