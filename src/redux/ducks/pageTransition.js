const initialState = {
  pageLoading: false,
}

export const setTrue = () => ({
  type: 'SET_TRUE'
})

export const setFalse = () => ({
  type: 'SET_FALSE'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FALSE': {
      return {
        ...state,
        pageLoading: false,
      }
    }
    case 'SET_TRUE': {
      return {
        ...state,
        pageLoading: true,
      }
    }
    default:
      return state
  }
}