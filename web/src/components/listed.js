import React from 'react'
import { navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { createSelector } from 'reselect'
import dayjs from 'dayjs'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getList, getSelected } from '../state/CategoriesRedux'
import { setNeeded, setOffered } from '../state/DetailRedux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

import { green, pink, blue } from '@material-ui/core/colors'

import icons from '../util/iconList'

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

const type = 'needed'

const colors = {
  needed: green[500],
  offered: pink[500],
  tip: blue[500]
}

const selectedDataSelector = createSelector(
  getList,
  getSelected,
  (list, selected) => list[selected]
)

export default ({ filter }) => {
  const classes = useStyles()
  const selectedData = useSelector(selectedDataSelector)
  const _query = {
    collection: 'posts',
    orderBy: ['createdAt', 'desc'],
    limit: 100
  }
  const query = filter
    ? { ..._query, where: ['category', '==', selectedData.id] }
    : _query

  useFirestoreConnect([query])
  const posts = useSelector(state => state.firestore.ordered.posts)
  const categories = useSelector(getList)
  const dispatch = useDispatch()
  const setAccordingly = type === 'needed' ? setNeeded : setOffered

  const textos =
    type === 'needed'
      ? { title: 'Necesito: ', subtitle: 'Se necesita' }
      : { title: 'Ofrezco: ', subtitle: 'Se ofrece' }

  const onClickItem = id => {
    dispatch(setAccordingly(id))
    navigate(`./detail`)
  }

  if (!isLoaded(posts)) {
    return <Skeleton variant="rect" width={210} height={118} />
  }
  return (
    <Layout>
      <SEO title={textos.title} />
      <List className={classes.list}>
        {isLoaded(posts) &&
          posts.map(
            ({
              title,
              desc,
              id,
              category,
              type,
              backgroundColor = colors[type],
              color = '#eee'
            }) => (
              <React.Fragment key={id}>
                <ListItem onClick={() => onClickItem(id)} button>
                  <ListItemAvatar>
                    <Avatar alt="Categoria" style={{ backgroundColor, color }}>
                      {icons[categories[category].iconName]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={title} secondary={desc} />
                </ListItem>
              </React.Fragment>
            )
          )}
      </List>
    </Layout>
  )
}
/*
import React from 'react'
import { navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { createSelector } from 'reselect'
import dayjs from 'dayjs'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getList, getSelected } from '../state/CategoriesRedux'
import { setNeeded, setOffered } from '../state/DetailRedux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

import { green, pink } from '@material-ui/core/colors'

import icons from '../util/iconList'

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

const selectedDataSelector = createSelector(
  getList,
  getSelected,
  (list, selected) => list[selected]
)

export default ({ type }) => {
  const classes = useStyles()
  const selectedData = useSelector(selectedDataSelector)
  useFirestoreConnect([
    {
      collection: 'posts',
      orderBy: ['createdAt', 'desc'],
      limit: 100,
      where: ['category', '==', selectedData.id]
    }
  ])
  const posts = useSelector(state => state.firestore.ordered.posts)
  const dispatch = useDispatch()
  const setAccordingly = type === 'needed' ? setNeeded : setOffered

  const textos =
    type === 'needed'
      ? { title: 'Necesito: ', subtitle: 'Se necesita' }
      : { title: 'Ofrezco: ', subtitle: 'Se ofrece' }

  const onClickItem = id => {
    dispatch(setAccordingly(id))
    navigate(`./${type}-detail`)
  }

  if (!isLoaded(posts)) {
    return <Skeleton variant="rect" width={210} height={118} />
  }
  return (
    <Layout>
      <SEO title={textos.title + selectedData.primary} />
      <List className={classes.list}>
        <ListSubheader className={classes.subheader}>
          {selectedData.primary}
        </ListSubheader>
        {isLoaded(posts) &&
          posts.map(({ title, desc, id }) => (
            <React.Fragment key={id}>
              <ListItem onClick={() => onClickItem(id)} button>
                <ListItemAvatar>
                  <Avatar alt="Categoria">
                    {icons[selectedData.iconName]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} secondary={desc} />
              </ListItem>
            </React.Fragment>
          ))}
      </List>
    </Layout>
  )
}
*/
