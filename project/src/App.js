import './index.css';
import { useEffect, useReducer, useState } from 'react';
import { filterReducer, initialFilterState } from './rdx/filterSlice';
import filterBy from './utils/filterBy';
import FilterContainer from './components/FilterContainer';
import ProductCard from './components/ProductCard';
import AppLoader from './components/AppLoader';

function App() {
  const [filters, dispatch] = useReducer(filterReducer, initialFilterState);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    window.fetch("https://demo7242716.mockable.io/products")
      .then(res => res.json())
      .then(({ products: resProducts }) => {
        const resCategories = [
          ...new Set(resProducts.map(({ category }) => category)),
        ].sort();

        const resBrands = [
          ...new Set(resProducts.map(({ brand }) => brand)),
        ].sort();

        setProducts(resProducts);
        setBrands(resBrands);
        setCategories(resCategories);
      })
      .catch(err => {
        console.log(err);
      })
    return () => {
    }
  }, []);

  const filteredProducts = filterBy(products, filters);

  if (products.length === 0) {
    return <AppLoader />
  }

  return (
    <div className="container">
      <section className="flex">
        <div className="w-1/5 p-2">
          <FilterContainer brands={brands} categories={categories} dispatch={dispatch} />
        </div>
        <div className="w-4/5 p-2">
          <div className="grid grid-cols-4 gap-2">
            {filteredProducts.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
