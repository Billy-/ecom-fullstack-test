import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard from './ProductCard';

const props = {
    title: 'foo',
    image: {
        path: 'foo',
        alt: 'foo'
    },
    productLabel: 'foo',
    description: 'foo',
    priceLabel: 'foo',
    currency: '$',
    price: 9999,
    ctaLink: 'foo',
    cta: 'foo',
    history: {
        push: () => {}
    }
};

describe('ProductCard', () => {
    it('renders without throwing', () => {
        renderer.create(<ProductCard {...props} />);
    });

    it('renders an image with correct path and alt props', () => {
        const instance = renderer.create(<ProductCard {...props} />).root;
        const imgProps = instance.findByType('img').props;
        expect(imgProps.src).toBe(props.image.path);
        expect(imgProps.alt).toBe(props.image.alt);
    });

    it('puts the currency symbol before the price', () => {
        const instance = renderer.create(<ProductCard {...props} />).root;
        const renderedCurency = instance.findByProps({ className: 'price' }).props.children[0];
        expect(renderedCurency).toBe(props.currency);
    });

    it('puts a decimal in the right place in the price', () => {
        const instance = renderer.create(<ProductCard {...props} />).root;
        const renderedPrice = instance.findByProps({ className: 'price' }).props.children[1];
        expect(renderedPrice).toBe('99.99');
    });

    // TODO: Finish writing tests
    // it('renders XYZ')

    it('matches snapshot', () => {
        const tree = renderer
          .create(<ProductCard {...props} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
