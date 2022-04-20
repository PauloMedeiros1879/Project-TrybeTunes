import React, { Component } from 'react';
import Loading from '../components/Loading';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Loading loading={ loading } />
      </div>
    );
  }
}

export default Favorites;
