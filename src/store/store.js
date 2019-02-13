import { createStore } from 'redux';

const getComposeEnhancers = () => {
    /* Hack for SSR */
    if (!global.window) global.window = {};
    // eslint-disable-next-line no-underscore-dangle
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
};

// create Redux store
const store = createStore(
    // no reducers at init time, they are injected async
    x => x,
    getComposeEnhancers(),
);

store.asyncReducers = {};

export default store;

