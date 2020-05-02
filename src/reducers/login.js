import {
  LOGIN_PAGE_LOADED,
  UPDATE_FIELD_LOGIN,
  LOGIN_REQUESTED,
} from '../utils/constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_PAGE_LOADED:
      return {
        ...state,
        email: '',
        password: '',
      };

    case LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_FIELD_LOGIN:
      return {
        ...state,
        [action.key]: action.value,
      };

    default:
      return state;
  }
};
