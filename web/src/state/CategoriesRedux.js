import autodux from 'autodux'

const INITIAL_STATE = {
  selected: 1,
  list: [
    {
      id: 0,
      primary: 'Comida',
      secondary: 'Pan, leche, harina ...etc.',
      iconName: 'FavoriteIcon'
    },
    {
      id: 1,
      primary: 'Asistencia Médica',
      secondary: `Primeros auxilios, psicologos, ...etc.`,
      iconName: 'FavoriteIcon'
    },
    {
      id: 2,
      primary: 'Medicamentos',
      secondary: 'Gente ofreciendo medicamentos, datos de farmacias, ...etc.',
      iconName: 'FavoriteIcon'
    },
    {
      id: 3,
      primary: 'Mascotas',
      secondary: 'Veterinarios, comida',
      iconName: 'FavoriteIcon'
    },
    {
      id: 4,
      primary: 'Agua',
      secondary: `Agua o bebestibles.`,
      iconName: 'FavoriteIcon'
    },
    {
      id: 5,
      primary: 'Servicentro',
      secondary: `Combustibles y comida`,
      iconName: 'LocalGasStationIcon'
    },
    {
      id: 6,
      primary: 'Transporte',
      secondary: 'Medios de transportes públicos y #subete',
      iconName: 'FavoriteIcon'
    },
    {
      id: 7,
      primary: 'Supermercados',
      secondary: 'Datos de supermercados, minimarkets y ferias abastecidas',
      iconName: 'ShoppingCartIcon'
    }
  ]
}

export const {
  reducer,
  initial,
  slice,
  actions: { setSelected },
  selectors: { getSelected, getList }
} = autodux({
  slice: 'categories',
  initial: INITIAL_STATE,
  actions: {
    setSelected: (state, payload) => ({ ...state, selected: payload })
  }
})
