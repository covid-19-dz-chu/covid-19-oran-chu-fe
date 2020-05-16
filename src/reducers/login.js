import {
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
  VALIDATE_FIELDS,
  LOGIN_REQUESTED,
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
        submitErrors: action.payload.errors || null,
      };

    case UPDATE_FIELD_LOGIN:
      return {
        ...state,
        [action.key]: action.value,
      };
    case VALIDATE_FIELDS:
      return {
        ...state,
        formErrors: action.payload.errors || null,
      };
    default:
      return state;
  }
};
