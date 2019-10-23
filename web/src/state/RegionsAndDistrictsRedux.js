import autodux from 'autodux'

import data from '../util/regiones.json'

const INITIAL_STATE = {
  data,
  selected: {
    region: 14,
    comuna: 5
  }
}

export const {
  reducer,
  initial,
  slice,
  actions: { setNeeded, setOffered },
  selectors: { getSelected, getData }
} = autodux({
  slice: 'regions',
  initial: INITIAL_STATE,
  actions: {
    setRegion: (state, payload) => ({
      ...state,
      selected: { comuna: state.selected.comuna, region: payload }
    }),
    setComuna: (state, payload) => ({
      ...state,
      selected: { comuna: paylod, region: state.selected.region }
    })
  }
})
