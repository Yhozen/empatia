import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useFirestoreConnect,
  useFirebase,
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
  const messages = useSelector(getList)
  const selectedData = useSelector(selectedDataSelector)

  const onClickItem = id => {}
  console.log(selectedData)
  return (
    <List className={classes.list}>
      {messages.map(
        ({
          id,
          primary,
          secondary,
          iconName,
          backgroundColor = pink[500],
          color = '#fff'
        }) => (
          <React.Fragment key={id}>
            <ListItem onClick={() => onClickItem(id)} button>
              <ListItemAvatar>
                <Avatar alt="Categoria" style={{ backgroundColor, color }}>
                  <ShoppingCartIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          </React.Fragment>
        )
      )}
    </List>
  )
}
const SecondPage = () => {
  const firestore = useFirestore()
  useFirestoreConnect([
    {
      collection: 'todos',
      doc: 'Z8RnGXNA6YA9ph2hitjL',
      subcollections: [{ collection: 'messages', limit: 1 }]
    }
  ])
  const user = useSelector(state => state.firebase.auth)
  const todos = useSelector(state => state.firestore.ordered.todos)
  console.log(todos)
  function addTodo() {
    const exampleTodo = { done: false, text: 'text2', author: user.uid }
    return firestore
      .collection('chatrooms')
      .doc('test')
      .collection('messages')
      .add(exampleTodo)
  }
  return (
    <Layout>
      <SEO title="Necesito: categorias" />
      <ListComponent />
      <Button color="secondary" variant="contained" onClick={addTodo}>
        Logout
      </Button>
    </Layout>
  )
}

export default SecondPage
