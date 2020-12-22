const initialState = {
  open: false,
}

export const setDrawerFalse = () => ({
  type: 'SET_DRAWER_FALSE'
})

export const setDrawerTrue = () => ({
  type: 'SET_DRAWER_TRUE'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DRAWER_FALSE': {
      return {
        ...state,
        open: false,
      }
    }
    case 'SET_DRAWER_TRUE': {
      return {
        ...state,
        open: true,
      }
    }
    default:
      return state
  }
}