import './App.css';
import Home from './Pages/Home';
import ShoppingCategory from './Pages/ShoppingCategory';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shoppingcategory" element={<ShoppingCategory/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
