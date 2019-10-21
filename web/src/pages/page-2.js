import React from 'react'
import { Link } from 'gatsby'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, useFirebase } from 'react-redux-firebase'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Button } from '@material-ui/core'

const SecondPage = () => {
  const firebase = useFirebase()
  useFirestoreConnect([
    { collection: 'viajes' } // or 'todos'
  ])
  const todos = useSelector(state => state.firestore.ordered.viajes)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page {todos.map(todo => todo.to)}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <Button onClick={() => firebase.logout()}>Logout</Button>
    </Layout>
  )
}

export default SecondPage
