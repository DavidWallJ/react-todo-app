/**
 * Created by david on 6/4/17.
 */

import firebase from 'firebase';

try {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAz-6gGP5y5VpX7f-o3vtSbMHcfXXSPoQM",
    authDomain: "react-todo-app-293f6.firebaseapp.com",
    databaseURL: "https://react-todo-app-293f6.firebaseio.com",
    projectId: "react-todo-app-293f6",
    storageBucket: "react-todo-app-293f6.appspot.com",
    messagingSenderId: "1018421489359"
  };

  firebase.initializeApp(config);

} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;

// two exports here so that we can access firebase from the root or from the .ref() part of the path easily