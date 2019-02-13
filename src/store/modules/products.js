import { get } from 'lodash';

import createReducer from '../createReducer';
import injectReducer from '../injectReducer';

const key = 'products';

// Actions
const SET_PRODUCTS_LOADED = 'SET_PRODUCTS_LOADED';
const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';
const SET_PRODUCTS_ERROR = 'SET_PRODUCTS_ERROR';
const SET_PRODUCTS = 'SET_PRODUCTS';

// Action creators
export const setProductsLoaded = loaded => ({
    type: SET_PRODUCTS_LOADED,
    loaded
});

export const setProductsLoading = loading => ({
    type: SET_PRODUCTS_LOADING,
    loading
});

export const setProductsError = error => ({
    type: SET_PRODUCTS_ERROR,
    error
});

export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
});

// Action handlers (reducers)
const actionHandlers = {
    [SET_PRODUCTS_LOADED]: (state, { loaded }) => ({
        ...state,
        loaded,
        error: false
    }),
    [SET_PRODUCTS_LOADING]: (state, { loading }) => ({
        ...state,
        loading,
        error: false
    }),
    [SET_PRODUCTS_ERROR]: (state, { error }) => ({
        ...state,
        error
    }),
    [SET_PRODUCTS]: (state, { products }) => ({
        ...state,
        products,
        // TODO: if products already exist in state,
        // perhaps not overwrite them, merge and de-dupe?
        error: false
    })
};

// Default state
const initialState = {
    loaded: false,
    loading: false,
    error: false,
    products: []
};

// Selectors
export const areProductsLoaded = state => get(state, [key, 'loaded']);
export const areProductsLoading = state => get(state, [key, 'loading']);
export const getProductsError = state => get(state, [key, 'error']);
export const getProducts = state => get(state, [key, 'products']);

// Inject
injectReducer(key, createReducer(initialState, actionHandlers));
