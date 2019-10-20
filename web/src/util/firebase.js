import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

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

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase
