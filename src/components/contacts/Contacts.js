import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

const Contacts = ({ user }) => {
  const [users, setUser] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadUsers()
  }, [])

  const onInputSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterSearch = (data) => {
    if (search == '') {
      return data
    } else if (data.firstName.toLowerCase().includes(search.toLowerCase())) {
      return data
    } else if (data.secondName.toLowerCase().includes(search.toLowerCase())) {
      return data
    } else if (data.phone.toLowerCase().includes(search.toLowerCase())) {
      return data
    }
  }

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3001/contacts')
    setUser(result.data.reverse())
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/contacts/${id}`)
    loadUsers()
  }

  return (
    <div className="container">
      {user ? (
        <div>
          <h1 className="container py-4">Список контактов</h1>
          <div className="form-group">
            <label htmlFor="title">Поиск контактов</label>
            <input
              type="text"
              className="form-control"
              placeholder="Введите имя"
              name="search"
              onChange={(e) => onInputSearch(e)}
            />
          </div>

          <br />
          {users.filter(filterSearch).map((item) => {
            return (
              <div key={item.id} className="container">
                <div className="row mb-4">
                  <div className="col-sm">{item.firstName}</div>
                  <div className="col-sm">{item.secondName}</div>
                  <div className="col-sm">{item.phone}</div>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(item.id)}
                  >
                    Удалить
                  </button>
                  <Link
                    className="btn btn-outline-primary ml-2"
                    to={`/contacts/edit/${item.id}`}
                  >
                    Редактировать
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="container ">
          <p className="text-center">
            Что-бы увидеть список контактов
            <Link className="nav-link" to="/register">
              зарегистрируйтесь
            </Link>
            или войдете под своим
            <Link className="nav-link" to="/login">
              именем
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, null)(Contacts)
