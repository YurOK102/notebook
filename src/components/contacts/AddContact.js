import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const AddContact = () => {
  let history = useHistory()

  const [user, setUser] = useState({
    firstName: '',
    secondName: '',
    phone: '',
  })

  const { firstName, secondName, phone } = user
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (firstName !== '' && secondName !== '' && phone !== '') {
      await axios.post('http://localhost:3001/contacts', user)
      history.push('/contacts')
    }
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
        <button className="btn btn-success">Добавить</button>
      </form>
    </div>
  )
}

export default AddContact
