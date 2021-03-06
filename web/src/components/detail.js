import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { useSelector, useDispatch } from 'react-redux'
import {
  useFirestoreConnect,
  isLoaded,
  isEmpty,
  useFirestore
} from 'react-redux-firebase'
import { createSelector } from 'reselect'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { getList, getSelected, setSelected } from '../state/CategoriesRedux'
import { getDetailId } from '../state/DetailRedux'

import Skeleton from '@material-ui/lab/Skeleton'

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
  },
  card: {
    minWidth: 275,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}))

const detailSelector = createSelector(
  state => state.firestore.ordered.detailedNeed,
  detailedNeed =>
    detailedNeed && detailedNeed.length === 1 ? detailedNeed[0] : {}
)

export default ({ type }) => {
  const classes = useStyles()
  const detailId = useSelector(getDetailId)
  useFirestoreConnect([
    {
      collection: 'posts',
      doc: detailId,
      storeAs: 'detailedNeed'
    }
  ])
  const detail = useSelector(detailSelector)

  const textos =
    type === 'needed'
      ? { title: 'Necesito: ', subtitle: 'Se necesita' }
      : { title: 'Ofrezco: ', subtitle: 'Se ofrece' }

  if (!isLoaded(detail)) {
    return <Skeleton variant="rect" width={210} height={118} />
  }

  return (
    <Layout>
      <SEO title={textos.title + detail.title} />
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom>
            {textos.subtitle}
          </Typography>
          <Typography variant="h5" component="h2">
            {detail.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {detail.location} | {detail.displayName} | {detail.contact}
          </Typography>
          <Typography variant="body2" component="p">
            {detail.desc}
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}
