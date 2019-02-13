import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import HomePage from './HomePage';

const props = {};

describe('HomePage', () => {
    it('renders without throwing', () => {
        renderer.create(
            <Provider store={store}>
                <HomePage {...props} />
            </Provider>);
    });

    it('matches snapshot', () => {
        const tree = renderer
            .create(
                <Provider store={store}>
                    <HomePage {...props} />
                </Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
