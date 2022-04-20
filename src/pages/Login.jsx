import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      btnDisabled: true,
      loading: false,
    };
  }

handleClick = (handleSubmit) => {
  const { name } = this.state;
  this.setState({ loading: true });
  createUser({ name }).then(() => {
    handleSubmit();
  });
}

handleChange = ({ target }) => {
  const { name, value } = target;
  const minValue = 3;
  this.setState({
    [name]: value,
  });
  if (name === 'name') {
    this.setState({
      btnDisabled: value.length < minValue,
    });
  }
}

render() {
  const { name, btnDisabled, loading } = this.state;
  const { handleSubmit } = this.props;
  return (
    <div data-testid="page-login">
      {loading ? (
        <Loading loading={ loading } />
      ) : (
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
            type="button"
            data-testid="login-submit-button"
            onClick={ () => {
              this.handleClick(handleSubmit);
            } }
            disabled={ btnDisabled }
          >
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
