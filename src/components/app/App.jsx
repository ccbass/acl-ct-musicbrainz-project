import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumSongs from './Releases/AlbumSongs';
import LyricContainer from '../../containers/LyricContainer';

import SearchContainer from '../../containers/SearchContainer';
import Header from '../Header';

export default function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                {/* <Route exact path="/" component={SearchContainer}/> */}
                {/* <Route path="/:artist" component={}/> */}
                <Route path="/:artist/:release" component={AlbumSongs}/>
                <Route
                    path="/:artist/:release/:song"
                    component={LyricContainer}
                />
            </Switch>
        </Router>
    );
}
