import { APP_LOADING } from '../utils/constants/actionTypes';

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
    default:
      return state;
  }
}
