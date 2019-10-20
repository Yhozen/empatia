import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

import { db, auth, app } from '../util/firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfConfig = {}

const rrfProps = {
  firebase: app,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default ({ element }) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      {element}
    </ReactReduxFirebaseProvider>
  </Provider>
)
