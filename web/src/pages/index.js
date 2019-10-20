import React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { db, auth } from '../util/firebase'

const IndexPage = () => {
  const [user, initialising, error] = useAuthState(auth)
  const [value, loading, collectionError] = useCollection(
    db.collection('viajes'),
    {
      snapshotListenOptions: { includeMetadataChanges: true }
    }
  )
  const login = () => auth.signInAnonymously()
  console.log(user)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.{user ? 'logged in' : 'no user'}</p>
      <p>Now go build something great. as</p>
      {value && (
        <span>
          Collection:{' '}
          {value.docs.map(doc => (
            <React.Fragment key={doc.id}>{doc.data().to}, </React.Fragment>
          ))}
        </span>
      )}
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button onClick={login}>Login</Button>
      <p>
        Made with <span style={{ color: '#e25555' }}>&#9829;</span> in Chile
      </p>
    </Layout>
  )
}

export default IndexPage
