import {
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
  LOGIN_REQUESTED,
  VALIDATE_FIELDS_LOGIN,
} from '../utils/constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_PAGE_LOADED:
      return {
        ...state,
        laoding: false,
        email: '',
        password: '',
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        formErrors: null,
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
