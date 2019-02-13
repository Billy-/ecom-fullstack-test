import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../routes';
import store from '../../store';
import Layout from '../../components/Layout';

import './App.scss';

const App = () => (
    <Provider store={store}>
        <Layout>
            <Router routes={routes} history={browserHistory}/>
        </Layout>
    </Provider>
);

export default App;
