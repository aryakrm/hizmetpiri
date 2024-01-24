// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/database'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyCF73dPy_Md3yoCrUL5w1JT9z_mA2WhDi0',
  authDomain: 'hizmetpiri-4454e.firebaseapp.com',
  projectId: 'hizmetpiri-4454e',
  storageBucket: 'hizmetpiri-4454e.appspot.com',
  messagingSenderId: '592025767863',
  appId: '1:592025767863:web:f57fb1abb2d7632b842232',
  measurementId: 'G-EVTK5LJKFJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
