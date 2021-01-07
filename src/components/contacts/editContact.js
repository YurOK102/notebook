import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

export const EditContact = () => {
  let history = useHistory()
  const { id } = useParams()

  const [user, setUser] = useState({
    firstName: '',
    secondName: '',
    phone: '',
  })

  const { firstName, secondName, phone } = user
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    loadUser()
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:3001/contacts/${id}`, user)
    history.push('/contacts')
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/contacts/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="title">Имя</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите Имя"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Фамилия</label>
          <input
            type="title"
            className="form-control"
            placeholder="Введите Фамилию"
            name="secondName"
            value={secondName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Номер телефона</label>
          <input
            type="title"
            className="form-control"
            placeholder="Введите номер телефона"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success">Редактировать</button>
      </form>
    </div>
  )
}

export default EditContact
