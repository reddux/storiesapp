import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCBxV6adYJhcMUXxpF2t7n0zJX7llPvjKU",
  authDomain: "storiesapp-d6e91.firebaseapp.com",
  databaseURL: "https://storiesapp-d6e91.firebaseio.com",
  projectId: "storiesapp-d6e91",
  storageBucket: "storiesapp-d6e91.appspot.com",
  messagingSenderId: "55794856298"
};

var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;