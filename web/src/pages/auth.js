import React from 'react'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'

import SEO from '../components/seo'
import FirebaseAuth from '../components/firebaseAuth'

export default () => {
  return (
    <>
      <SEO title="Authentication" />
      <p>
        Encuentra lo que necesites y ayuda a otros a encontrar. Si estas
        buscando algo anda a necesito, si tienes información o prestas alguna
        ayuda elige ofrezco
      </p>
      <FirebaseAuth />
    </>
  )
}
