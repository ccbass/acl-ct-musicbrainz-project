import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchContainer from '../../containers/SearchContainer';

import AlbumContainer from '../../containers/AlbumContainer';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchContainer}/> 
        <Route path="/:artist" component={AlbumContainer}/> 
        {/* <Route path="/:artist/:release" component={}/> */}
        {/* <Route path="/:artist/:release/:song" component={}/> */}
      </Switch>
    </Router>
  );
}
