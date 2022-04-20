import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
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
          <Loading loading={ loading } />
        </div>
      </header>
    );
  }
}

export default Header;
