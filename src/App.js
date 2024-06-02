import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import Card from './Components/Card';
import ProductItem from './Components/ProductItem';
import CustomNavBar from './Components/CustomNavBar';

function App() {
  return ( 
 <div> 
   <CustomNavBar/> 
   <div className="container App">
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/Card" element={<Card />} />
        <Route path="/products/:id" element={<ProductItem />} />  
        <Route path="/category/:category" element={<ProductList />} />  
      </Routes>
    </div>
  </div> 
  )
}
export default App;