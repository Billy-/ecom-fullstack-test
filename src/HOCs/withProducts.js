import { compose }from 'redux';
import { connect } from 'react-redux';

import { getProducts, areProductsLoading, areProductsLoaded } from '../store/modules/products';
import branch from './branch';
import LoadProducts from '../components/LoadProducts';

const mapStateToProps = state => ({
    products: getProducts(state),
    loading: areProductsLoading(state),
    loaded: areProductsLoaded(state)
});

/**
 * withProducts
 * takes care of grabbing products (and loading/loaded state) from redux.
 * if not already loaded, branches off to LoadProducts, which will
 * load them and update redux accordingly
 * @param {*} BaseComponent 
 */
const withProducts = BaseComponent => {
    const WithProducts = compose(
        connect(mapStateToProps),
        branch(
            ({ loaded }) => !loaded,
            LoadProducts,
        ),
    )(BaseComponent);
    return WithProducts;
};

export default withProducts;
