import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../../routes';
import Layout from '../../components/Layout';

import './App.scss';

const App = () => (
    <Layout>
        <Router routes={routes} history={browserHistory}/>
    </Layout>
);

export default App;
