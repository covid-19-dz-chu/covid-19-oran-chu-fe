import { APP_LOADING, LOGIN_REQUESTED } from '../utils/constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case APP_LOADING: 
      return {
        ...state,
      }
    case LOGIN_REQUESTED :
      return {
        ...state,
        currentUser: action.payload.currantUser ? action.payload.currantUser : null,
        isAuthenticated: action.payload.success ? action.payload.success : false,
        redirectTo: action.payload.success ? '/dashbord' : null,
      }
    default:
      return state;
  }
}
