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
  actions: { setRegion, setComuna },
  selectors: { getSelected, getData }
} = autodux({
  slice: 'regions',
  initial: INITIAL_STATE,
  actions: {
    setRegion: (state, payload) => ({
      ...state,
      selected: { comuna: 0, region: payload }
    }),
    setComuna: (state, payload) => ({
      ...state,
      selected: { comuna: payload, region: state.selected.region }
    })
  }
})
