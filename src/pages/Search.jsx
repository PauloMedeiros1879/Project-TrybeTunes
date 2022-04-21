import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import SearchFind from '../components/SearchFind';
import Loading from '../components/Loading';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      search: '',
      lastestSearch: '',
      loading: false,
      albumsList: null,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      albumsList: null,
    });
  }

  onSubmit = async () => {
    const { search } = this.state;
    this.setState({ loading: true });
    const results = await searchAlbumsAPI(search);
    this.setState({
      albumsList: results, loading: false, lastestSearch: search, search: '',
    });
  };

  render() {
    const { search, albumsList, loading, lastestSearch } = this.state;
    const minValue = 2;
    return (
      <div data-testid="page-search">
        {loading ? <Loading /> : (
          <form>
            <div>
              <input
                data-testid="search-artist-input"
                type="text"
                name="search"
                value={ search }
                onChange={ this.handleChange }
              />
              <button
                type="button"
                onClick={ this.onSubmit }
                data-testid="search-artist-button"
                disabled={ search.length < minValue }
              >
                Procurar
              </button>
            </div>
          </form>
        )}
        { albumsList
          ? <SearchFind search={ lastestSearch } albumsList={ albumsList } />
          : '' }
        <Header />
      </div>
    );
  }
}

export default Search;
