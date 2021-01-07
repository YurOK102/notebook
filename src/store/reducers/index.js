import { combineReducers } from 'redux'

import authReducer from './authReducer'
import contactReducer from './contactReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  user: authReducer,
  contactReducer,
  errorReducer,
})

export default rootReducer
