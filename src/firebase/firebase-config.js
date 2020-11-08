import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDk1tT0sN7et56epjqsYmmsn6Bcj_wDnLc',
  authDomain: 'journal-app-cd38e.firebaseapp.com',
  databaseURL: 'https://journal-app-cd38e.firebaseio.com',
  projectId: 'journal-app-cd38e',
  storageBucket: 'journal-app-cd38e.appspot.com',
  messagingSenderId: '45787152276',
  appId: '1:45787152276:web:acbe76e292f098c87a5981',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
