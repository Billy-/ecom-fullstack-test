import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

const props = {
    children: 'foo'
};

describe('Card', () => {
    it('renders without throwing', () => {
        renderer.create(<Card {...props} />);
    });

    it('matches snapshot', () => {
        const tree = renderer
          .create(<Card {...props} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
