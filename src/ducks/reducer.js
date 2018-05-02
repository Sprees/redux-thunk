import axios from 'axios'

const DO_IT = 'DO_IT'
const GET_IMAGE = 'GET_IMAGE'

const initialState = {
  greeting: 'Hi',
  image: null
}

export const doSomething = () => {
  return (dispatch, getState) => {
    return dispatch({
      type: DO_IT,
      payload: 'Hello'
    })
  }
}

export const getImage = () => {
  return (dispatch) => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(image => dispatch({
        type: GET_IMAGE,
        image: image.data.message
      }))
      .catch(err => new Error(err))
  }
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_IMAGE:
      return { ...state, image: action.image }
    case DO_IT:
      return { ...state, greeting: payload }
    default:
      return state
  }
}

export default reducer