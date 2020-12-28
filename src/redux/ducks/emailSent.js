const initialState = {
  emailSent: false,
}

const setEmailTrue = () => {
  return {
    type: 'SET_EMAIL_TRUE',
  }
}

const setEmailFalse = () => {
  return {
    type: 'SET_EMAIL_FALSE',
  }
}

export const toggleEmailSent = () => {
  return (dispatch) => {
    dispatch(setEmailTrue())
    setTimeout(() => {
      dispatch(setEmailFalse())
    }, 3000)
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL_FALSE': {
      return {
        ...state,
        emailSent: false,
      }
    }
    case 'SET_EMAIL_TRUE': {
      return {
        ...state,
        emailSent: true,
      }
    }
    default:
      return state
  }
}