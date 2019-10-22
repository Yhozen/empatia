import React from 'react'
import { navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../components/layout'
import SEO from '../components/seo'
import icons from '../util/iconList'

import { getList, setSelected } from '../state/CategoriesRedux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import { pink, green, blue } from '@material-ui/core/colors'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

export default ({ type }) => {
  const classes = useStyles()
  const messages = useSelector(getList)
  const dispatch = useDispatch()

  const onClickItem = id => {
    dispatch(setSelected(id))
    navigate(`./listed`)
  }

  return (
    <Layout>
      <SEO title="Filtrar por categorias" />
      <Typography color="textSecondary" gutterBottom></Typography>
      <List className={classes.list}>
        {messages.map(
          ({
            id,
            primary,
            secondary,
            iconName,
            backgroundColor = blue[500],
            color = '#fff'
          }) => (
            <React.Fragment key={id}>
              <ListItem onClick={() => onClickItem(id)} button>
                <ListItemAvatar>
                  <Avatar alt="Categoria" style={{ backgroundColor, color }}>
                    {icons[iconName]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          )
        )}
      </List>
    </Layout>
  )
}
