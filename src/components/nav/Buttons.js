import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
  return (
    <ul className="nav">
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
  )
}

export default Buttons
