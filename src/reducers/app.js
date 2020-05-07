import { APP_LOADING, LOGOUT_REQUESTED } from '../utils/constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        appName: 'Covid 19 application',
        appLoaded: action.payload[0]?.data ? true : false,
        currentUser : action.payload[1] ? { email : action.payload[1].email } : null,
        isAuthenticated : action.payload[1] ? true : false,
      };

    case LOGOUT_REQUESTED:
      return {
        ...state,
        isAuthenticated:action.payload?.success ? true : false,
      }
    default:
      return state;
  }
}
