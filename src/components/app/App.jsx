import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumSongs from './AlbumSongs';


import SearchContainer from '../../containers/SearchContainer';



export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={SearchContainer}/> */}
        {/* <Route path="/:artist" component={}/> */}
        <Route path="/:artist/:release" component={AlbumSongs}/>
        {/* <Route path="/:artist/:release/:song" component={}/> */}
      </Switch>
    </Router>
  );
}
