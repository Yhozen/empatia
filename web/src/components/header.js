import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { HEADER_HEIGHT } from '../configs'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: HEADER_HEIGHT,
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center'
  }
}))
const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const goBack = () => typeof window !== 'undefined' && window.history.go(-1)
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <IconButton
          onClick={goBack}
          edge="start"
          color="inherit"
          aria-label="back">
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          {siteTitle}
        </Typography>
        <IconButton
          onClick={() => navigate('/me')}
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
