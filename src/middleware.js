/* eslint-disable no-param-reassign */
import { removeTokenRequest } from './api/request';
import {
  ASYNC_START,
  ASYNC_END,
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED,
} from './utils/constants/actionTypes';

// Check if function is async or not
function isPromise(v) {
  return v && typeof v.then === 'function';
}

// Replaces redux thunk
const promiseMiddleware = (store) => (next) => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    const currentView = store.getState().viewChangeCounter;
    const { skipTracking } = action;

    action.payload.then(
      (res) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        console.info('RESULT', res);
        action.payload = res;

        store.dispatch({ type: ASYNC_END, promise: action.payload });
        store.dispatch(action);
      },
      (error) => {
        const currentState = store.getState();
        if (!skipTracking && currentState.viewChangeCounter !== currentView) {
          return;
        }
        console.warn('ERROR', error);

        action.error = true;
        action.payload = error; // TODO: change to a lightweight error

        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }

        store.dispatch(action);
      }
    );
    return;
  }
  next(action);
};

const localStorageMiddleware = () => (next) => (action) => {
  if (action.type === LOGIN_REQUESTED) {
    if (action.payload.success) {
      // setTokenRequest(action.payload.token);
    }
  } else if (action.type === LOGOUT_REQUESTED) {
    removeTokenRequest();
  }
  next(action);
};

export { promiseMiddleware, localStorageMiddleware };
