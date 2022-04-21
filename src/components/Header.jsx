import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getUserInformation();
  }

  getUserInformation() {
    getUser()
      .then(({ name, image }) => {
        this.setState({
          userName: name, profilePicture: image, loading: false });
      });
  }

  render() {
    const { userName, profilePicture, loading } = this.state;
    return (
      <header data-testid="header-component">
        <Link
          to="/search"
          data-testid="link-to-search"
        >
          Pesquisa
        </Link>

        <Link
          to="/favorites"
          data-testid="link-to-favorites"
        >
          Favoritos
        </Link>

        <Link
          to="/profile"
          data-testid="link-to-profile"
        >
          Perfil
        </Link>

        <div data-testid="header-user-name">
          {loading
            ? <Loading loading={ loading } />
            : (
              <div>
                <img src={ profilePicture } alt="foto do perfil" />
                <span>{ userName }</span>
              </div>
            )}
        </div>
      </header>
    );
  }
}

export default Header;
