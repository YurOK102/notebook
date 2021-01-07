import * as actions from './index'
import { auth } from '../../firebase'

export const loggedUser = () => async (dispatch) => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const idTokenResult = await user.getIdTokenResult()
      dispatch({
        type: actions.LOGGED_IN_USER,
        payload: {
          email: user.email,
          token: idTokenResult,
        },
      })
    }
  })
  return () => unsubscribe()
}
