import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import GoogleMapReact from 'google-map-react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import FirebaseAuth from '../components/firebaseAuth'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GOOGLE_MAP_KEY = process.env.GATSBY_GOOGLE_MAP_KEY

const mapOptions = {
  gestureHandling: 'greedy',
  zoomControl: false,
  panControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scaleControl: false
}
const IndexPage = () => {
  const user = useSelector(state => state.firebase.auth)
  return (
    <Layout>
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          options={mapOptions}
          bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
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
