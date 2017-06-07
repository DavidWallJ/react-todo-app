/**
 * Created by david on 6/4/17.
 */

import firebase from 'firebase';

try {
  // Initialize Firebase
  const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER_ID,
    projectId: process.env.PROJECT_ID
  };

  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;

// two exports here so that we can access firebase from the root or from the .ref() part of the path easily