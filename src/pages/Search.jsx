import React, { Component } from 'react';
import Loading from '../components/Loading';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Loading loading={ loading } />

      </div>
    );
  }
}

export default Search;
