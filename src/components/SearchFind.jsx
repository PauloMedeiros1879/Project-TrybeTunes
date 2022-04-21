import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './AlbumList';

class SearchFind extends Component {
  render() {
    const { albumsList, search } = this.props;
    if (albumsList.length === 0) {
      return (<p>Nenhum álbum foi encontrado</p>);
    }
    return (
      <div>
        <span>
          Resultado de álbuns de:
          {' '}
          { search }
        </span>
        <div>
          { albumsList.map((album) => (
            <AlbumList key={ album.collectionId } album={ album } />
          ))}
        </div>
      </div>
    );
  }
}

SearchFind.propTypes = {
  albumsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.string.isRequired,
};
export default SearchFind;
