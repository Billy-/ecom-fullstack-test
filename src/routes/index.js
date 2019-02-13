import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';
import NotFoundPage from '../views/NotFoundPage';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="*" component={NotFoundPage}/>
    </Router>
);