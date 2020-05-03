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
        error: action.payload.error ? action.payload.error : null,
        currentUser: action.payload.currentUser ? action.payload.currentUser : null,
        redirectTo: action.payload.success ? '/dashbord' : null,
        isAuthenticated: action.payload.currentUser ? true : false,
        token: action.payload.token ? action.payload.token : null,
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
