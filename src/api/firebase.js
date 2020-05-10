import * as firebase from 'firebase';
import { firebaseConfig } from '../utils/constants';

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const appAuth = app.auth;

export const getCurrentUser = () => {
  return app.auth().currentUser;
};

// eslint-disable-next-line import/prefer-default-export
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    const token = await user.getIdToken();
    return { success: true, token, user };
  } catch (error) {
    return {
      success: false,
      error: {
        code: error.code,
        message: error.message,
      },
    };
  }
};



export const logout = async () => {
  try {
    await app.auth().signOut();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
};