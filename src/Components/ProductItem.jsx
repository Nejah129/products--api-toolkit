import React from 'react'
import { useDispatch } from 'react-redux'; 
import { addItem } from '../toolkit/cardReducer';

const ProductItem = ({currentProduct}) => {
    const dispatch = useDispatch();
  
   return (
      <div className="product">
    <img src={currentProduct.image} alt={currentProduct.image}/>
    <h2>{currentProduct.title}</h2>
    <p>Price: ${currentProduct.price}</p>
    <button onClick={()=> dispatch(addItem(currentProduct))}>Add to Cart</button>
</div> 
  )
}

export default ProductItem