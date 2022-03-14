import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA0nDSRtGh1vQ3LrKR5CRSqaX9e9Ek3Wgk',
  authDomain: 'instagram-clone-ce74d.firebaseapp.com',
  databaseURL: 'https://instagram-clone-ce74d-default-rtdb.firebaseio.com',
  projectId: 'instagram-clone-ce74d',
  storageBucket: 'instagram-clone-ce74d.appspot.com',
  messagingSenderId: '217409533412',
  appId: '1:217409533412:web:b558c119d02972b5eac3f1'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };