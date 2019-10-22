import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { Location } from '@reach/router'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import MapIcon from '@material-ui/icons/Map'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const equality = (prev, curr) =>
  prev.uid === curr.uid && prev.isLoaded === curr.isLoaded

const Layout = ({ children }) => {
  const user = useSelector(state => state.firebase.auth, equality)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  if (!isLoaded(user)) return <span>Loading...</span>
  if (isEmpty(user)) navigate('/auth')
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          paddingTop: 0
        }}>
        <main>{children}</main>
        <footer>
          <Location>
            {({ location }) => {
              return (
                <BottomNavigation
                  value={location.pathname}
                  onChange={(event, newValue) => navigate(newValue)}
                  showLabels>
                  <BottomNavigationAction
                    value="/"
                    label="Mapa"
                    icon={<MapIcon />}
                  />
                  <BottomNavigationAction
                    value="/needed-categories"
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    value="/offered-categories"
                    label="Nearby"
                    icon={<LocationOnIcon />}
                  />
                </BottomNavigation>
              )
            }}
          </Location>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
