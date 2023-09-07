import './App.css';
import Home from './Pages/Home';
import ShoppingCategory from './Pages/ShoppingCategory';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import AddProductPage from './Pages/AddProductPage';

function App() {
  const user = useSelector((state) => state.rootReducer.user.currentUser);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={user? <Home/> : <Navigate to="/login" />}/>
          <Route path="/shoppingcategory/:id" element={<ShoppingCategory/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/addproduct" element={<AddProductPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
