import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumList extends Component {
  render() {
    const {
      album: { collectionId, collectionName, artistName, artworkUrl100 } } = this.props;
    return (
      <div data-testid="album-card">
        <Link
          to={ `album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          <img
            src={ artworkUrl100 }
            alt="Capa do álbum"
            className="album-artwork"
          />
          <p>{ collectionName }</p>
        </Link>
        <p>{ artistName }</p>
      </div>
    );
  }
}

AlbumList.propTypes = {
  album: PropTypes.shape({
    collectionId: PropTypes.number,
    artistName: PropTypes.string,
    collectionName: PropTypes.string,
    artworkUrl100: PropTypes.string,
  }).isRequired,
};

export default AlbumList;
