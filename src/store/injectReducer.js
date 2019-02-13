import { combineReducers } from 'redux';

import store from './store';

const injectReducer = (key, reducer) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign

    store.replaceReducer(combineReducers(store.asyncReducers));
};

export default injectReducer;
