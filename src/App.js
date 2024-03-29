
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import  ShopCategory  from './Pages/ShopCategory';
import  Shop from './Pages/Shop';
import  Product from './Pages/Product';
import  Cart  from './Pages/Cart';
import  LoginSignup  from './Pages/LoginSignup';
 import Footer from './Components/Footer/Footer';
 import men_banner from './Components/Assets/banner_mens.png'
 import women_banner from'./Components/Assets/banner_women.png'
 import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/bone straight' element={<ShopCategory banner={men_banner} category="bone straight"/>} />
        <Route path='/curls' element={<ShopCategory banner={women_banner} category="curls"/>} />
        <Route path='/braids' element={<ShopCategory banner={kids_banner} category="braids"/>} />
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
