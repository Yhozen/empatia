import React from 'react'
import { useSelector } from 'react-redux'
import {
  useFirebase,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'

import SEO from '../components/seo'
import Layout from '../components/layout'
import getDisplayName from '../util/getDisplayName'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import { APP_COLORS } from '../configs'
import icons from '../util/iconList'
import { getList } from '../state/CategoriesRedux'

export default () => {
  const firebase = useFirebase()
  const user = useSelector(state => state.firebase.auth)
  const uid = !isLoaded(user) || isEmpty(user) ? 'NotARealUser' : user.uid
  useFirestoreConnect([
    {
      collection: 'posts',
      limit: 100,
      where: ['author', '==', uid]
    }
  ])
  const posts = useSelector(state => state.firestore.ordered.posts)
  const categories = useSelector(getList)
  const onClick = () => firebase.logout()
  const displayName = getDisplayName(user)
  return (
    <Layout>
      <div style={{ width: '90%', maxWidth: 960, margin: '0 auto' }}>
        <SEO title="Mi cuenta" />
        <Typography variant="body1">Mi cuenta</Typography>
        <Divider variant="fullWidth" />
        <Typography>Nombre a mostrar: {displayName}</Typography>
        <Typography variant="subtitle1">Mis posts</Typography>
        <Divider variant="fullWidth" />

        <List>
          {isLoaded(posts) &&
            posts.map(
              ({
                title,
                desc,
                id,
                category,
                type,
                backgroundColor = APP_COLORS[type],
                color = '#eee'
              }) => (
                <React.Fragment key={id}>
                  <ListItem divider onClick={() => onClickItem(id)} button>
                    <ListItemAvatar>
                      <Avatar
                        alt="Categoria"
                        style={{ backgroundColor, color }}>
                        {icons[categories[category].iconName]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={title} secondary={desc} />
                  </ListItem>
                </React.Fragment>
              )
            )}
        </List>

        <Button
          onClick={onClick}
          variant="contained"
          color="secondary"
          size="large">
          Cerrar sesión
        </Button>
      </div>
    </Layout>
  )
}
