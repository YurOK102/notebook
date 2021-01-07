import * as actions from '../actions/index'

const initialState = { contacts: null }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_CONTACTS:
      return { ...state, contacts: action.contacts }

    default:
      return state
  }
}

export default reducer
