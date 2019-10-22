import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'

import { app } from '../util/firebase'

import { reducer as categoriesReducer } from './CategoriesRedux'
import { reducer as detailReducer } from './DetailRedux'

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  categories: categoriesReducer,
  detail: detailReducer
})

const initialState = {
  firestore: {
    ordered: {
      viajes: []
    },
    profile: null
  }
}

let lazyCreateStore
if (typeof window !== `undefined`) {
  lazyCreateStore = () =>
    createStore(
      rootReducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
} else {
  lazyCreateStore = () => createStore(rootReducer, initialState)
}

const rrfConfig = {}

const rrfProps = {
  firebase: app,
  config: rrfConfig,
  createFirestoreInstance // <- needed if using firestore
}

export default ({ element }) => {
  const store = lazyCreateStore()
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider dispatch={store.dispatch} {...rrfProps}>
        {element}
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}
