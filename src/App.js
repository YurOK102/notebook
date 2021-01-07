import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { auth } from './firebase'
import 'react-toastify/dist/ReactToastify.css'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import Header from './components/nav/Header'
import RegisterComplete from './pages/auth/RegisterComplete'
import ForgotPassword from './pages/auth/ForgotPassword'

import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/editContact'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()

        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult,
          },
        })
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <Router>
      <>
        <Header />
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />

          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/contacts/add" component={AddContact} />
          <Route exact path="/contacts/edit/:id" component={EditContact} />
        </Switch>
      </>
    </Router>
  )
}

export default App
