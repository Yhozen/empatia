import React from 'react'
import { Link } from 'gatsby'
import Button from 'react-bootstrap/Button'
import { useAuthState } from 'react-firebase-hooks/auth'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import firebase from '../util/firebase'

const IndexPage = () => {
  const [user, initialising, error] = useAuthState(firebase.auth())
  const login = () => firebase.auth().signInAnonymously()
  console.log(user)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.{user && user.uuid}</p>
      <p>Now go build something great. as</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button onClick={login}>Button</Button>
      <Link to="/page-2/">Go to page 2</Link>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great. as</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Button>Button</Button>
      <Link to="/page-2/">Go to page 2</Link>
      <p>
        Made with <span style={{ color: '#e25555' }}>&#9829;</span> in Chile
      </p>
    </Layout>
  )
}

export default IndexPage
