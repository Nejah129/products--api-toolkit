import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchcategories } from '../toolkit/categoryReducer';
import { Link } from 'react-router-dom';
 
const CategoryList = () => {
    const {categories,loading,error} =useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchcategories());
      }, [dispatch]);
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

   return (
    <div> 
      <ul className="categories">
      {categories &&
            React.Children.toArray(
              categories.map(el=>     
                <Link  to={`/category/${el}`}>
              <li>{el}</li>
              </Link>)
            )
        }   
</ul>
</div>
  )
}

export default CategoryList