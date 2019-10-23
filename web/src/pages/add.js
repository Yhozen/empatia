import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import * as yup from 'yup'
import useFormal from '@kevinwolf/formal'
import { createSelector } from 'reselect'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SnackbarContentWrapper from '../components/snackbarcontentwrapper'

import getDisplayName from '../util/getDisplayName'

import { getList } from '../state/CategoriesRedux'

import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles'

const schema = yup.object().shape({
  type: yup.string().required(),
  category: yup.number().required(),
  region: yup.number().required(),
  comuna: yup.number().required(),
  title: yup.string().required(),
  desc: yup.string().required(),
  contact: yup.string(),
  location: yup.string()
})

import { getData } from '../state/RegionsAndDistrictsRedux'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '10 auto'
  }
}))

const initialValues = {
  category: 1,
  region: 14,
  comuna: 0
}

const regionesSelector = createSelector(
  getData,
  data => data.map(({ region }) => region)
)

export default () => {
  const firestore = useFirestore()
  const categories = useSelector(getList)
  const regiones = useSelector(regionesSelector)
  const user = useSelector(state => state.firebase.auth)
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values =>
      firestore
        .collection('posts')
        .add({ ...values, author: user.uid, displayName: getDisplayName(user) })
        .then(handleClick)
  })

  const comunasSelector = createSelector(
    getData,
    data => data[formal.values.region].comunas
  )
  const comunas = useSelector(comunasSelector)

  const handleClick = () => setOpen(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Layout>
      <SEO title="Necesito..." />
      <form style={{ width: '90%', maxWidth: '960px', margin: '0 auto' }}>
        <FormGroup>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-simple">Tipo</InputLabel>
            <Select
              autoWidth
              value={formal.values.type}
              onChange={e => formal.change('type', e.target.value)}>
              <MenuItem value="needed">Necesito</MenuItem>
              <MenuItem value="offered">Ofrezco</MenuItem>
              <MenuItem value="tip">Dato</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-simple">Categoria</InputLabel>
            <Select
              autoWidth
              value={formal.values.category}
              onChange={e => formal.change('category', e.target.value)}>
              {categories.map(({ id, primary }) => (
                <MenuItem value={id} key={id}>
                  {primary}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText> Si no esta, agregar en otros.</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              id="title"
              label="Titulo"
              fullWidth
              value={formal.values.title}
              onChange={e => formal.change('title', e.target.value)}
              margin="normal"
            />
            {formal.errors.title && (
              <FormHelperText error>{formal.errors.title}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <TextField
              id="desc"
              label="Descripción"
              fullWidth
              value={formal.values.desc}
              onChange={e => formal.change('desc', e.target.value)}
              margin="normal"
            />
            {formal.errors.desc && (
              <FormHelperText error>{formal.errors.desc}</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <TextField
              id="contact"
              label="Contacto"
              fullWidth
              value={formal.values.contact}
              onChange={e => formal.change('contact', e.target.value)}
              margin="normal"
            />
            {formal.errors.contact ? (
              <FormHelperText error>{formal.errors.contact}</FormHelperText>
            ) : (
              <FormHelperText>
                Número, instagram o alguna forma de contactarte.
              </FormHelperText>
            )}
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-simple">Región</InputLabel>
            <Select
              autoWidth
              value={formal.values.region}
              onChange={e => formal.change('region', e.target.value)}>
              {regiones.map((region, i) => (
                <MenuItem value={i} key={i}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-simple">Comuna</InputLabel>
            <Select
              autoWidth
              value={formal.values.comuna}
              onChange={e => formal.change('comuna', e.target.value)}>
              {comunas.map((comuna, i) => (
                <MenuItem value={i} key={i}>
                  {comuna}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <TextField
              id="location"
              label="Ubicación"
              fullWidth
              value={formal.values.location}
              onChange={e => formal.change('location', e.target.value)}
              margin="normal"
            />
            {formal.errors.desc && (
              <FormHelperText error>{formal.errors.desc}</FormHelperText>
            )}
          </FormControl>
          <Button variant="contained" color="primary" onClick={formal.submit}>
            Submit
          </Button>
        </FormGroup>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}>
          <SnackbarContentWrapper
            variant="success"
            message="Guardado exitosamente!"
          />
        </Snackbar>
      </form>
    </Layout>
  )
}
