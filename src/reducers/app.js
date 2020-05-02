import {
  APP_LOADING,
  APP_LOADING_SUCCESS,
  APP_LOADING_ERROR,
} from '../utils/constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        appName: 'Covid 19 application',
        appLoaded: true,
      };
    default:
      return state;
  }
}
