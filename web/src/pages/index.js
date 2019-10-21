import React from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import {
  useFirestoreConnect,
  useFirebase,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebaseui from 'firebaseui'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
  const firebase = useFirebase()
  const user = useSelector(state => state.firebase.auth)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Hola</p>
      {!isLoaded(user) ? (
        <span>Loading...</span>
      ) : isEmpty(user) ? (
        <span>Not Authed</span>
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}

      <StyledFirebaseAuth
        uiConfig={{
          signInFlow: 'popup',
          signInSuccessUrl: '/signedIn',
          signInOptions: [firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID],
          callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
              firebase.handleRedirectResult(authResult).then(() => {
                // history.push(redirectUrl); if you use react router to redirect
              })
              return false
            }
          }
        }}
        firebaseAuth={firebase.auth()}
      />
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <p>
        Made with <span style={{ color: '#e25555' }}>&#9829;</span> in Chile
      </p>
    </Layout>
  )
}

export default IndexPage
