import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from './NotFoundPage';

const props = {
    location: {
        pathname: 'foo'
    }
};

describe('NotFoundPage', () => {
    it('renders without throwing', () => {
        renderer.create(<NotFoundPage {...props} />);
    });

    it('displays the pathname from react-router somewhere in the error message', () => {
        const instance = renderer.create(<NotFoundPage {...props} />);
        const message = instance.root.findByType('h2').props.children;
        expect(message.includes(props.location.pathname)).toBe(true);
    });

    it('matches snapshot', () => {
        const tree = renderer
            .create(<NotFoundPage {...props} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
