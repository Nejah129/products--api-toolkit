import React from 'react'
import {useSelector } from 'react-redux';
  import CardItem from './CardItem';
 
const Card = () => {
  const {products,total} =useSelector((state) =>  state.card);
  
  return (
    <div className="App card-total">
   <div>  {products &&
         React.Children.toArray(
           products.map(el=><CardItem currentProduct={el}/>)
         )
     }
     </div>
  <h4>Total price : ${ Math.round(total * 100) / 100}</h4>
  </div>
  )
}

export default Card