import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  useFirestoreConnect,
  useFirebase,
  useFirestore
} from 'react-redux-firebase'
import * as yup from 'yup'
import useFormal from '@kevinwolf/formal'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SnackbarContentWrapper from '../components/snackbarcontentwrapper'

import getDisplayName from '../util/getDisplayName'

import { getList, getSelected, setSelected } from '../state/CategoriesRedux'

import Button from '@material-ui/core/Button'

import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import Snackbar from '@material-ui/core/Snackbar'

const schema = yup.object().shape({
  type: yup.string().required(),
  category: yup.number().required(),
  title: yup.string().required(),
  desc: yup.string().required(),
  location: yup.string().required()
})

const initialValues = {
  category: 1
}

export default () => {
  const firestore = useFirestore()
  const categories = useSelector(getList)
  const user = useSelector(state => state.firebase.auth)
  const [open, setOpen] = useState(false)
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values =>
      firestore
        .collection(values.type)
        .add({ ...values, author: user.uid, displayName: getDisplayName(user) })
        .then(handleClick)
  })

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
          <FormControl>
            <InputLabel htmlFor="category-simple">Tipo</InputLabel>
            <Select
              autoWidth
              value={formal.values.type}
              onChange={e => formal.change('type', e.target.value)}>
              <MenuItem value="needed">Necesito</MenuItem>
              <MenuItem value="offered">Ofrezco</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
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
