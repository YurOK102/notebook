import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = ({ history }) => {
  const [email, setEmail] = useState('')

  const { user } = useSelector((state) => ({ ...state }))

  useEffect(() => {
    if (user && user.token) history.push('/')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const config = {
      url: process.env.REACT_APP_REGISTER_URL,
      // url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    }

    await auth.sendSignInLinkToEmail(email, config)
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    )
    // сохраняем email пользователя в local storage
    window.localStorage.setItem('emailForRegistration', email)
    // обнуляем input
    setEmail('')
  }

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Введите email для регистрации</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ваш email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-outline-primary">
        Зарегистрироваться
      </button>
    </form>
  )

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>

          {registerForm()}
        </div>
      </div>
    </div>
  )
}

export default Register
