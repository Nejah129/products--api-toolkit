import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../toolkit/cardReducer';


const CardItem = ({currentProduct}) => {

    const  dispatch= useDispatch();


  return (
    <div className="card card-content">
    <img src={currentProduct.image} alt={currentProduct.image}/>
    <span  >
        <h3>{currentProduct.title}</h3>
         <p className="price">${currentProduct.price}</p>
        <div className="quantity">
            <button className="decrement" onClick={()=> dispatch(deleteItem(currentProduct))}>-</button>
            <span className="quantity-value">{currentProduct.quantity}</span>
            <button className="increment" onClick={()=> dispatch(addItem(currentProduct))}>+</button>
        </div>
     </span>
 </div>
  )
}

export default CardItem