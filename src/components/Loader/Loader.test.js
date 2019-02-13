import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './Loader';

const props = {};

describe('Loader', () => {
    it('renders without throwing', () => {
        renderer.create(<Loader {...props} />);
    });

    it('matches snapshot', () => {
        const tree = renderer
            .create(<Loader {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
