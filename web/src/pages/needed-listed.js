import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useFirestoreConnect,
  isLoaded,
  isEmpty,
  useFirestore
} from 'react-redux-firebase'
import { createSelector } from 'reselect'
import dayjs from 'dayjs'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getList, getSelected, setSelected } from '../state/CategoriesRedux'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Avatar from '@material-ui/core/Avatar'
import Skeleton from '@material-ui/lab/Skeleton'

import { green, pink } from '@material-ui/core/colors'

import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation'

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

export default () => {
  const classes = useStyles()
  const selectedData = useSelector(selectedDataSelector)
  useFirestoreConnect([
    {
      collection: 'needed',
      orderBy: ['createdAt', 'desc'],
      limit: 100,
      where: ['category', '==', selectedData.id]
    }
  ])
  const needed = useSelector(state => state.firestore.ordered.needed)
  console.log(needed)
  const onClickItem = id => {}
  if (!isLoaded(needed)) {
    return <Skeleton variant="rect" width={210} height={118} />
  }
  return (
    <Layout>
      <SEO title={'Necesito: ' + selectedData.primary} />
      <List className={classes.list}>
        <ListSubheader className={classes.subheader}>
          {selectedData.primary}
        </ListSubheader>
        {isLoaded(needed) &&
          needed.map(({ title, desc, id }) => (
            <React.Fragment key={id}>
              <ListItem onClick={() => onClickItem(id)} button>
                <ListItemAvatar>
                  <Avatar alt="Categoria">
                    <ShoppingCartIcon />
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
