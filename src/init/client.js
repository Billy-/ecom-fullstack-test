import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

require('offline-plugin/runtime').install();

ReactDOM.hydrate(
    <App />,
    document.getElementById('app')
);

if(module.hot) {
    module.hot.accept(
        <App />,
        document.getElementById('app')
    );
}