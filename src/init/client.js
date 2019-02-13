import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';

require('offline-plugin/runtime').install();

ReactDOM.hydrate(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        <Router routes={routes} history={browserHistory}/>,
        document.getElementById('app')
    );
}