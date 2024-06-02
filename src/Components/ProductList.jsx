import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../toolkit/productReducer';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = () => {
  let { category } = useParams();
    const {products,loading,error} =useSelector((state) =>  state.product);
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch(fetchProducts(category));
      }, [dispatch,category]);

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

   return (
    <div className="container App">
       {products &&
            React.Children.toArray(
              products.map(el=><ProductItem currentProduct={el}/>)
            )
        }

    </div>
  )
}

export default ProductList