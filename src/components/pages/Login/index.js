import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory, useLocation } from 'react-router-dom';
import LoginForm from './Form';
import { loginWithEmailAndPassword } from '../../../utils/firebase';

function Login() {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  const login = async (username, password) => {
    const result = await loginWithEmailAndPassword(username, password);

    if (result.success) {
      history.replace(from);
    }
  };

  return (
    <div>
      {/* TODO: Add breadcumps */}
      <LoginForm login={login} />
    </div>
  );
}

export default observer(Login);
