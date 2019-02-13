import { connect } from 'react-redux';
import {
    areProductsLoading,
    areProductsLoaded,
    getProductsError,
    setProducts,
    setProductsLoading,
    setProductsLoaded,
    setProductsError
} from '../../store/modules/products';

import LoadProducts from './LoadProducts';

const mapStateToProps = state => ({
    loading: areProductsLoading(state),
    loaded: areProductsLoaded(state),
    error: getProductsError(state)
});

const mapDispatchToProps = dispatch => ({
    onStartLoading: () => dispatch(setProductsLoading(true)),
    onProductsLoaded: products => {
        dispatch(setProducts(products));
        dispatch(setProductsLoading(false));
        dispatch(setProductsLoaded(true));
    },
    onProductsError: () => dispatch(setProductsError(
        'Sorry, something went wrong loading the products!',
    ))
});

const LoadProductsContainer = connect(mapStateToProps, mapDispatchToProps)(LoadProducts);

export default LoadProductsContainer;
