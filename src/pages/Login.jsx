import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      btnDisabled: false,
      loading: false,
    };
  }

handleClick = async () => {
  const { name } = this.state;
  this.setState({ loading: true });
  await createUser({ name });
  this.setState({ btnDisabled: true });
}

handleChange =(event) => {
  event.preventDefault();
  this.setState({ name: event.target.value });
}

render() {
  const { name, btnDisabled, loading } = this.state;
  const minValue = 3;
  return (
    <div data-testid="page-login">
      {btnDisabled && <Redirect to="/search" />}
      {loading ? <Loading /> : (
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              data-testid="login-name-input"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ this.handleClick }
            disabled={ name.length < minValue }
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}
}

export default Login;
