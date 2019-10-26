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
import PanToolIcon from '@material-ui/icons/PanTool'
import AddIcon from '@material-ui/icons/Add'

import Header from './header'
import './layout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const equality = (prev, curr) =>
  prev.uid === curr.uid && prev.isLoaded === curr.isLoaded

const withoutPrefix = path => path.split(__PATH_PREFIX__).join('')

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
                  value={withoutPrefix(location.pathname)}
                  onChange={(event, newValue) => navigate(newValue)}
                  showLabels>
                  <BottomNavigationAction
                    value="/"
                    label="Listado"
                    icon={<FavoriteIcon />}
                  />
                  <BottomNavigationAction
                    value="/categories"
                    label="Categorias"
                    icon={<PanToolIcon />}
                  />
                  <BottomNavigationAction
                    value="/add"
                    label="Agregar"
                    icon={<AddIcon />}
                  />
                  <BottomNavigationAction
                    value="/map"
                    label="Map"
                    icon={<MapIcon />}
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
