import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import AlbumSongs from './Releases/AlbumSongs';

=======
import LyricContainer from '../../containers/LyricContainer';
>>>>>>> c8787c9506334fa3abfc69159f964f503691fe2b

import SearchContainer from '../../containers/SearchContainer';
import Header from '../Header';

export default function App() {
<<<<<<< HEAD
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
=======
    return (
        <Router>
            <Header />
            <Switch>
                {/* <Route exact path="/" component={SearchContainer}/> */}
                {/* <Route path="/:artist" component={}/> */}
                {/* <Route path="/:artist/:release" component={}/> */}
                <Route
                    path="/:artist/:release/:song"
                    component={LyricContainer}
                />
            </Switch>
        </Router>
    );
>>>>>>> c8787c9506334fa3abfc69159f964f503691fe2b
}
