import React from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { db, auth } from '../util/firebase'

const IndexPage = () => {
  useFirestoreConnect([
    { collection: 'viajes' } // or 'todos'
  ])
  const todos = useSelector(state => state.firestore.ordered.viajes)
  const user = useSelector(state => state.firebase.profile)
  console.log(user)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great. as</p>
      {todos && (
        <span>
          Collection:{' '}
          {todos.map(todo => (
            <>{todo.to}, </>
          ))}
        </span>
      )}
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button onClick={() => auth.signInAnonymously()}>Login</Button>
      <Button onClick={() => auth.signOut()}>Logout</Button>
      <p>
        Made with <span style={{ color: '#e25555' }}>&#9829;</span> in Chile
      </p>
    </Layout>
  )
}

export default IndexPage
