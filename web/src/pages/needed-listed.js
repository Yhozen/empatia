import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useFirestoreConnect,
  isLoaded,
  isEmpty,
  useFirestore
} from 'react-redux-firebase'
import { createSelector } from 'reselect'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { getList, getSelected, setSelected } from '../state/CategoriesRedux'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

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

const ListComponent = () => {
  const classes = useStyles()
  const selectedData = useSelector(selectedDataSelector)
  useFirestoreConnect([
    {
      collection: 'needed',
      where: ['category', '==', selectedData.id]
    }
  ])
  const needed = useSelector(state => state.firestore.ordered.needed)
  const onClickItem = id => {}
  console.log(needed)
  return (
    <>
      <p>{selectedData.primary}</p>
      <List className={classes.list}>
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
    </>
  )
}
export default () => {
  return (
    <Layout>
      <SEO title="Necesito: categorias" />
      <ListComponent />
    </Layout>
  )
}
