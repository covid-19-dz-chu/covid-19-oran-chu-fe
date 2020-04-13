import React from 'react'
import { observer } from 'mobx-react-lite'
import { useHistory, useLocation } from 'react-router-dom'
import LoginForm from './Form'
import { useUser } from '../../../hooks'

function Login() {
  const userCtx = useUser()
  const history = useHistory()
  const location = useLocation()

  const { from } = location.state || { from: { pathname: '/' } }

  const login = (username, password) => {
    userCtx.login(username, password, () => {
      history.replace(from)
    })
  }

  return (
    <div>
      {/* TODO: Add breadcumps */}
      <LoginForm login={login} />
    </div>
  )
}

export default observer(Login)
