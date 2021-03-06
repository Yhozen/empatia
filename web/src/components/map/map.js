import React, { useCallback, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import useWindowSize from '../../util/useWindowSize'

import Marker from './marker'
import styles from './gmap-styles.json'
import { HEADER_HEIGHT, BOTTOM_BAR_HEIGHT } from '../../configs'

const GOOGLE_MAP_KEY = process.env.GATSBY_GOOGLE_MAP_KEY

const CENTER = {
  lat: -33.4370935,
  lng: -70.6336092
}
const mapOptions = {
  gestureHandling: 'greedy',
  zoomControl: false,
  panControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  scaleControl: false,
  styles
}
const pathCoordinates = [{ lat: 59.95, lng: 30.3 }, { lat: 59.7, lng: 30.33 }]
export default () => {
  const [{ innerWidth: width, innerHeight: height }, loading] = useWindowSize()
  const [googleInternals, setGoogleInternals] = useState(null)
  const addPolyline = useCallback(
    path => {
      if (googleInternals) {
        const polyline = new googleInternals.maps.Polyline({
          path,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        })
        polyline.setMap(googleInternals.map)
      }
    },
    [googleInternals]
  )
  const onGoogleApiLoaded = ({ maps, map }) => {
    setGoogleInternals({ maps, map })
    console.log('google LOADED')
    addPolyline(pathCoordinates)
  }
  if (loading) return <div />

  return (
    <div style={{ height: height - (BOTTOM_BAR_HEIGHT + HEADER_HEIGHT) }}>
      <GoogleMapReact
        options={mapOptions}
        bootstrapURLKeys={{ key: GOOGLE_MAP_KEY, libraries: 'geometry' }}
        defaultCenter={CENTER}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onGoogleApiLoaded}
      />
    </div>
  )
}
