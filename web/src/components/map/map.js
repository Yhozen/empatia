import React from 'react'
import GoogleMapReact from 'google-map-react'
import useWindowSize from '../../util/useWindowSize'

import Marker from './marker'
import styles from './gmap-styles.json'

const GOOGLE_MAP_KEY = process.env.GATSBY_GOOGLE_MAP_KEY

const mapOptions = {
  gestureHandling: 'greedy',
  zoomControl: false,
  panControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scaleControl: false,
  styles
}

export default () => {
  const [{ innerWidth: width, innerHeight: height }, loading] = useWindowSize()
  if (loading) return <div />
  return (
    <div style={{ height: height - (56 + 106.2) }}>
      <GoogleMapReact
        options={mapOptions}
        bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33
        }}
        defaultZoom={11}>
        <Marker lat={59.955413} lng={30.337844} text="Cata" />
        <Marker lat={59.95} lng={30.03} text="Peligro" />
      </GoogleMapReact>
    </div>
  )
}
