import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext,useState, } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 //import nav_dropdown from '../Assets/dropdown_icon.png'

 const Navbar = () => {
    //creating a user state variable to shift between the navbars
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
   // const menuRef = useRef();

    // const dropdown_toggle = (e) =>{
    //   menuRef.current.classList.toggle('nav-menu-visible');
    //   e.target.classList.toggle('open');
    // }

    

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>JUST Hairs</p>
        </div>
        {/* <img className='nav-dropdown'onClick={dropdown_toggle} src={nav_dropdown} alt="" />  */}
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bone straight")}}><Link style={{ textDecoration: 'none'}}  to='/bone straight'>Bone Straight</Link>{menu==="bone straight"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("curls")}}><Link style={{ textDecoration: 'none'}} to='/curls'>Curls</Link>{menu==="curls"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("braids")}}><Link style={{ textDecoration: 'none'}} to='/braids'>Braids</Link>{menu==="braids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
          ?<button onClick = {()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}></button>
          : <Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>

    </div>
  )
}

export default Navbar
