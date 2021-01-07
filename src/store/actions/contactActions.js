import axios from 'axios'

import * as actions from './index'
export const getContacts = () => async (dispatch) => {
  const res = await axios.get('http://localhost:3001/contacts')
  dispatch({ type: actions.GET_CONTACTS, contacts: res.data })
}

// export const deleteContact = (id) => async (dispatch) => {
//   const res = await axios.delete(`http://localhost:3001/contacts/${id}`)
//   dispatch({ type: actions.DELETE_CONTACT, contacts: res.data })
// }

// export const addContact = (data) => async (dispatch) => {
//   const res = await axios.post('http://localhost:3001/contacts', data)
//   dispatch({ type: actions.ADD_CONTACT, contacts: res.data })
// }