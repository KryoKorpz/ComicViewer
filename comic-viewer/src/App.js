import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './screens/Home';
import Comics from './screens/Comics';
import ComicPreview from './screens/ComicPreview';
import ComicPage from './screens/ComicPage';

export default function App() {
    return (
        <Router>
            <Navigation />
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/comics">
                <Comics />
            </Route>
            <Route exact path="/comics/:comic">
                <ComicPreview />
            </Route>
            <Route exact path="/comics/:comic/:page">
                <ComicPage />
            </Route>
        </Router>
    );
}
