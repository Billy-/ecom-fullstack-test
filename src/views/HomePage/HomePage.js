import ProductList from  '../../components/ProductList';
import withProducts from '../../HOCs/withProducts';

const HomePage = withProducts(ProductList);

export default HomePage;
