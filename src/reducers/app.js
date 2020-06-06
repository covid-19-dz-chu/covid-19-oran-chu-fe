import {
  APP_LOADING,
  LOGOUT_REQUESTED,
  LOGIN_REQUESTED,
} from '../utils/constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        appName: 'COVID-19 application',
        appLoaded: true,
        currentUser: action.payload[1]
          ? { email: action.payload[1].email }
          : null,
        isAuthenticated: !!action.payload[1],
      };
    case LOGIN_REQUESTED:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        redirectTo: action.payload.success ? '/dashboard' : null,
        isAuthenticated: !!action.payload.currentUser,
      };
    case LOGOUT_REQUESTED:
      return {
        ...state,
        isAuthenticated: action.payload.success,
        redirectTo: action.payload.success ? '/login' : null,
      };
    default:
      return state;
  }
}
