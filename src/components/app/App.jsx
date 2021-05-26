import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumSongs from './Releases/AlbumSongs';
import LyricContainer from '../../containers/LyricContainer';
import AlbumContainer from '../../containers/AlbumContainer';
import SearchContainer from '../../containers/SearchContainer';
import Header from '../Header';

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={SearchContainer} />
                <Route
                    exact
                    path="/releases/:artist/:artistname"
                    component={AlbumContainer}
                />
                <Route
                    exact
                    path="/songs/:artist/:artistname/:release"
                    component={AlbumSongs}
                />
                <Route
                    path="/lyrics/:artist/:song"
                    component={LyricContainer}
                />
            </Switch>
        </Router>
    );
}
