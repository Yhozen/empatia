import autodux from 'autodux'

const INITIAL_STATE = {
  detailId: '',
  type: 'needed'
}

export const {
  reducer,
  initial,
  slice,
  actions: { setNeeded, setOffered },
  selectors: { getDetailId, getType }
} = autodux({
  slice: 'detail',
  initial: INITIAL_STATE,
  actions: {
    setNeeded: (state, payload) => ({
      type: 'needed',
      detailId: payload
    }),
    setOffered: (state, payload) => ({
      type: 'offered',
      detailId: payload
    })
  }
})
