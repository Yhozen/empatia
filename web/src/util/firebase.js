import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: `${process.env.GATSBY_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `${process.env.GATSBY_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: `${process.env.GATSBY_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
  measurementId: `G-${process.env.GATSBY_MEASURAMENT_ID}`
}

/*
production
export const app = firebase.initializeApp(firebaseConfig)
export const auth = app.auth()
export const db = app.firestore()
*/

/* debug*/
export const app =
  typeof window !== `undefined` ? firebase.initializeApp(firebaseConfig) : null
export const auth = typeof window !== `undefined` ? app.auth() : null
export const db = typeof window !== `undefined` ? app.firestore() : null
