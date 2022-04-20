import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class Contents extends Component {
  render() {
    return (
      <main data-testid="page-login">
        <Switch>
          <Route exact path="/">
            <Redirect to="/seach" />
          </Route>
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Contents;
