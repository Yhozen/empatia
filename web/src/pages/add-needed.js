import React from 'react'
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

import { getList, getSelected, setSelected } from '../state/CategoriesRedux'

import Button from '@material-ui/core/Button'

import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

const schema = yup.object().shape({
  age: yup.number().required(),
  name: yup.string().required(),
  desc: yup.string().required()
})

const initialValues = {
  age: 1
}

const ListComponent = () => {
  const categories = useSelector(getList)
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log('Your values are:', values)
  })

  return (
    <form style={{ width: '90%', maxWidth: '960px', margin: '0 auto' }}>
      <FormGroup>
        <TextField
          id="name"
          label="Name"
          fullWidth
          value={formal.values.name}
          onChange={e => formal.change('name', e.target.value)}
          margin="normal"
        />
        {formal.errors.name && <div>{formal.errors.name}</div>}
        <TextField
          id="desc"
          label="Desc"
          fullWidth
          value={formal.values.desc}
          onChange={e => formal.change('desc', e.target.value)}
          margin="normal"
        />
        {formal.errors.desc && <div>{formal.errors.desc}</div>}
        <FormControl>
          <InputLabel htmlFor="age-simple">Categoria</InputLabel>
          <Select
            autoWidth
            value={formal.values.age}
            onChange={e => formal.change('age', e.target.value)}>
            {categories.map(({ id, primary }) => (
              <MenuItem value={id} key={id}>
                {primary}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>

      <Button variant="contained" color="primary" onClick={formal.submit}>
        Submit
      </Button>
    </form>
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
