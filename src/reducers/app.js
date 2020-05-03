import {
  APP_LOADING,
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
