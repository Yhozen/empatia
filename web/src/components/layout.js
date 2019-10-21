import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { Location } from '@reach/router'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => {
  const user = useSelector(
    state => state.firebase.auth,
    (prev, curr) => prev.uid === curr.uid
  )
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
                    label="Recents"
                    icon={<RestoreIcon />}
                  />
                  <BottomNavigationAction
                    value="/page-2"
                    label="Favorites"
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    value="/404"
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
