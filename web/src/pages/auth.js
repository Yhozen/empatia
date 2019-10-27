import React from 'react'
import Typography from '@material-ui/core/Typography'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FirebaseAuth from '../components/firebaseAuth'

export default () => {
  return (
    <Layout>
      <SEO title="Autentificación" />
      <Typography align="center">Inicia sesión para agregar datos</Typography>
      <FirebaseAuth />
    </Layout>
  )
}
