import * as firebase from 'firebase';
import { firebaseConfig } from '../utils/constants';

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await app
      .auth()
      .signInWithEmailAndPassword(email, password);
    return { success: true, user };
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
