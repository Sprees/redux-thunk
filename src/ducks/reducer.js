import axios from 'axios'

const DO_IT = 'DO_IT'

const initialState = {
  greeting: 'Hello'
}

export const doSomething = () => {
  return (dispatch, getState) => {
    console.log(getState())
    return dispatch({
      type: DO_IT,
      payload: 'Boom'
    })
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DO_IT:
      return { ...state, greeting: payload }
    default:
      return state
  }
}

export default reducer