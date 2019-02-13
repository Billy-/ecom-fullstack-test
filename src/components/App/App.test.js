import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

const props = {};

describe('App', () => {
    it('renders without throwing', () => {
        renderer.create(<App {...props} />);
    });

    it('matches snapshot', () => {
        const tree = renderer
            .create(<App {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
