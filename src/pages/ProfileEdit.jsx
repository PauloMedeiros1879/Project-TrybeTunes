import React, { Component } from 'react';
import Loading from '../components/Loading';

class ProfileEdit extends Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <Loading loading={ loading } />

      </div>
    );
  }
}

export default ProfileEdit;
