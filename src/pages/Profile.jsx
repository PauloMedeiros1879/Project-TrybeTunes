import React, { Component } from 'react';
import Loading from '../components/Loading';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Loading loading={ loading } />
      </div>
    );
  }
}

export default Profile;
