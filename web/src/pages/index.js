import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import FirebaseAuth from '../components/firebaseAuth'

const IndexPage = () => {
  const user = useSelector(state => state.firebase.auth)
  return (
    <Layout>
      <SEO title="Home" />
      <FirebaseAuth />

      {!isLoaded(user) ? (
        <span>Loading...</span>
      ) : isEmpty(user) ? (
        <span>Not Authed</span>
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}

      <p>
        Made with <span style={{ color: '#e25555' }}>&#9829;</span> in Chile
      </p>
    </Layout>
  )
}

export default IndexPage
