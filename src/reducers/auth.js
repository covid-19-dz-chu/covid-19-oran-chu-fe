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
      }
    default:
      return state;
  }
}
