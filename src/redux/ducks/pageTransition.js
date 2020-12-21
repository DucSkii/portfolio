const initialState = {
  pageLoading: false,
  loadingDisable: false,
}

export const disableTrue = () => ({
  type: 'DISABLE_TRUE'
})

export const disableFalse = () => ({
  type: 'DISABLE_FALSE'
})

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
    case 'DISABLE_TRUE': {
      return {
        ...state,
        loadingDisable: true,
      }
    }
    case 'DISABLE_FALSE': {
      return {
        ...state,
        loadingDisable: false,
      }
    }
    default:
      return state
  }
}