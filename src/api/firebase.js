import * as firebase from 'firebase';
import { firebaseConfig } from '../utils/constants';


// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const { user } = await app
      .auth()
      .signInWithEmailAndPassword(email, password);

    const token = await user.getIdToken();
    const currentUser = {
      name: user.uid || null,
      email: user.email || null,
      phoneNumber: user.phoneNumber || null,
    };
    return { success: true, token, currentUser };
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

