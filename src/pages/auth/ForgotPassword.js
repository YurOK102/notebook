import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const { user } = useSelector((state) => ({ ...state }))

  useEffect(() => {
    if (user && user.token) history.push('/')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REGISTER,
      // url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    }

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail('')
        setLoading(false)
        toast.success('Check your email for password reset link')
      })
      .catch((error) => {
        setLoading(false)
        toast.error(error.mesage)
      })
  }

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4>Forgot Password</h4>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Введите Ваш email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email"
          autoFocus
        />
        <br />
        <button className="btn btn-outline-success" disabled={!email}>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
