import React, { useEffect } from 'react';
import { bool, oneOfType, string, func } from 'prop-types';
import axios from 'axios';

import Loader from '../Loader';

const fetchProducts = () => axios('/api/products').then(res => res.data);

const LoadProducts = ({
    loading,
    error,
    onStartLoading,
    onProductsLoaded,
    onProductsError
}) => {
    useEffect(() => {
        onStartLoading(true);
        fetchProducts()
            .then(onProductsLoaded)
            .catch(onProductsError);
    }, []);
    return (
        <div>
            {/* TOO: Nice error UI component */}
            {error && <span>{error}</span>}
            {loading && <Loader />}
            {/* TODO: Add button to manually retry loading
             (in case something goes wrong) */}
        </div>
    );
};

LoadProducts.propTypes = {
    loading: bool.isRequired,
    error: oneOfType([
        bool.isRequired,
        string.isRequired
    ]).isRequired,
    onStartLoading: func.isRequired,
    onProductsLoaded: func.isRequired,
    onProductsError: func.isRequired
};

export default LoadProducts;
