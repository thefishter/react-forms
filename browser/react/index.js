import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';

import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NewPlaylist from './components/NewPlaylist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer} >
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/playlists" component={NewPlaylist} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <IndexRedirect to="/albums" />
    </Route>
  </Router>,
  document.getElementById('app')
);
