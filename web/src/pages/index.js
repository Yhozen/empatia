import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Map from '../components/map'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Map" />
      <Map />
    </Layout>
  )
}

export default IndexPage

/* </div>
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
      </p>*/
