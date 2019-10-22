import React from 'react'
import Typography from '@material-ui/core/Typography'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import SEO from '../components/seo'
import FirebaseAuth from '../components/firebaseAuth'

export default () => {
  return (
    <div
      style={{
        flex: 1,
        maxWidth: 960,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: '100vh',
        margin: '0 auto'
      }}>
      <SEO title="Authentication" />

      <Typography
        variant="h2"
        align="center"
        color="textSecondary"
        gutterBottom>
        Yo te ayudo
        <FavoriteBorderIcon fontSize="large" color="secondary" />
      </Typography>

      <Typography align="center" color="textSecondary" gutterBottom>
        Encuentra lo que necesites y ayuda a otros a encontrar. Si estas
        buscando algo anda a necesito, si tienes información o prestas alguna
        ayuda elige ofrezco
      </Typography>

      <FirebaseAuth />
    </div>
  )
}
