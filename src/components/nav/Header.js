import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase'

const Header = () => {
  const [current, setCurrent] = useState('home')

  let dispatch = useDispatch()
  let { user } = useSelector((state) => ({ ...state }))
  let history = useHistory()

  const logout = () => {
    firebase.auth().signOut()
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    window.localStorage.removeItem('user')
    history.push('/login')
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nm-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <div className="collapse navbar-collapse d-flex flex-row-reverse">
          {user ? (
            <div className="collapse navbar-collapse d-flex justify-content-between">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Список контактов
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contacts/add">
                    Добавить контакт
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav">
                <Link to="/" onClick={logout} className="nav-link">
                  Выход
                </Link>
              </ul>
            </div>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Вход
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Регистрация
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
