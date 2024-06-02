import React from 'react'
import CategoryList from './CategoryList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';
import { AiFillHome } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
function CustomNavBar() {

  return (
    <nav className="navbar">
      <Link  to={`/`}>
        <AiFillHome  style={{color:"white"}} />
      </Link>
        <CategoryList/>
    <div className="cart">
    <Link  to={`/Card`}>
    <BsCartFill  style={{color:"white"}} />
     </Link>
    </div>
</nav>
  )
}

export default CustomNavBar