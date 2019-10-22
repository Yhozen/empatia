import React from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import SEO from '../components/seo'
import Layout from '../components/layout'
import getDisplayName from '../util/getDisplayName'

import Button from '@material-ui/core/Button'

export default () => {
  const firebase = useFirebase()
  const user = useSelector(state => state.firebase.auth)
  const onClick = () => firebase.logout()
  const displayName = getDisplayName(user)
  return (
    <Layout>
      <SEO title="Mi cuenta" />
      <p>{displayName}</p>
      <p>Work in progress</p>
      <Button
        onClick={onClick}
        variant="contained"
        color="secondary"
        size="large">
        Cerrar sesión
      </Button>
    </Layout>
  )
}
