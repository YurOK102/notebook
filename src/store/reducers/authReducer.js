import * as actions from '../actions/index'

export const authReducer = (state = null, action) => {
  switch (action.type) {
    case actions.LOGGED_IN_USER:
      return action.payload

    case actions.LOGOUT:
      return action.payload

    default:
      return state
  }
}

export default authReducer
