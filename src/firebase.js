import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC00TAijko4S-dsnpWXgolLa1Aw9BADxPo',
  authDomain: 'ecommerce-8c81e.firebaseapp.com',
  databaseURL: 'https://ecommerce-8c81e.firebaseio.com',
  projectId: 'ecommerce-8c81e',
  storageBucket: 'ecommerce-8c81e.appspot.com',
  messagingSenderId: '775858424303',
  appId: '1:775858424303:web:cac0b8c56a0367012f4e1a',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
