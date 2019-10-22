import React from 'react'
import { useSelector } from 'react-redux'
import {
  useFirestoreConnect,
  useFirebase,
  useFirestore
} from 'react-redux-firebase'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import FavoriteIcon from '@material-ui/icons/Favorite'

import { makeStyles } from '@material-ui/core/styles'

const messages = [
  {
    id: 1,
    primary: 'Comida',
    secondary: 'Pan, leche, harina ...etc.',
    person: <FavoriteIcon />
  },
  {
    id: 2,
    primary: 'Asistencia Médica',
    secondary: `Primeros auxilios, psicologos, ...etc.`,
    person: <FavoriteIcon />
  },
  {
    id: 3,
    primary: 'Medicamentos',
    secondary: 'Gente ofreciendo medicamentos, datos de farmacias, ...etc.',
    person: <FavoriteIcon />
  },
  {
    id: 4,
    primary: 'Mascotas',
    secondary: 'Veterinarios, comida',
    person: <FavoriteIcon />
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary:
      'My appointment for the doctor was rescheduled for next Saturday.',
    person: <FavoriteIcon />
  },
  {
    id: 6,
    primary: 'Agua',
    secondary: `Agua o bebestibles.`,
    person: <FavoriteIcon />
  },
  {
    id: 7,
    primary: 'Servicentro',
    secondary: `Combustibles y comida`,
    person: <FavoriteIcon />
  },
  {
    id: 8,
    primary: 'Transporte',
    secondary: 'Medios de transportes públicos y #subete',
    person: <FavoriteIcon />
  },
  {
    id: 9,
    primary: 'Supermercados',
    secondary: 'Datos de supermercados, minimarkets y ferias abastecidas',
    person: <FavoriteIcon />
  }
]

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
const ListComponent = () => {
  const classes = useStyles()
  return (
    <List className={classes.list}>
      {messages.map(({ id, primary, secondary, person }) => (
        <React.Fragment key={id}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar alt="Categoria">{person}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItem>
        </React.Fragment>
      ))}
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
