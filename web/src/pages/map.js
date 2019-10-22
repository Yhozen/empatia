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
