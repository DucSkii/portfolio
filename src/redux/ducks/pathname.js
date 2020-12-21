const initialState = {
  prevPath: '/',
}

export const getPrevPath = (payload) => ({
  type: 'PREV_PATH',
  payload,
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'PREV_PATH': {
      return {
        ...state,
        prevPath: action.payload,
      }
    }
    default:
      return state
  }
}