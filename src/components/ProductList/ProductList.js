import React  from 'react';
import { array } from 'prop-types';

import ProductCard from '../ProductCard';

import styles from './ProductList.scss';

const ProductList = ({ products }) => (
    <div className={styles.container}>
        {products.map(product => (
            <ProductCard {...product} key={product.title} />
        ))}
    </div>
);

ProductList.propTypes = {
    products: array.isRequired
};

export default ProductList;
