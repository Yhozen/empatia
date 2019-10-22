import autodux from 'autodux'

const INITIAL_STATE = {
  selected: 1,
  list: [
    {
      id: 0,
      primary: 'Comida',
      secondary: 'Pan, leche, harina ...etc.',
      iconName: 'KitchenIcon'
    },
    {
      id: 1,
      primary: 'Asistencia Médica',
      secondary: `Primeros auxilios, psicologos, ...etc.`,
      iconName: 'LocalHospitalIcon'
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
      secondary: 'Veterinarios, comida para mascotas',
      iconName: 'PetsIcon'
    },
    {
      id: 4,
      primary: 'Agua',
      secondary: `Agua o bebestibles.`,
      iconName: 'LocalDrinkIcon'
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
      iconName: 'AirportShuttleIcon'
    },
    {
      id: 7,
      primary: 'Supermercados',
      secondary: 'Datos de supermercados, minimarkets y ferias abastecidas',
      iconName: 'ShoppingCartIcon'
    },
    {
      id: 8,
      primary: 'Banco',
      secondary: 'Banco o cajero funcionando',
      iconName: 'AccountBalanceIcon'
    },
    {
      id: 9,
      primary: 'Otros',
      secondary: 'Todo que no entra en las categorias anteriores',
      iconName: 'ChatBubbleIcon'
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
