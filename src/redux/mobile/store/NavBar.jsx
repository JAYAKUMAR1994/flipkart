import React, { useState } from 'react'
import { Link,Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateHome } from '../Home/Home'
import profile from '../../../profile.png'

const NavBar = () => {
  const dispatch = useDispatch()
  
  const n = useSelector((state) => state.home)
  const mobile = useSelector((state) => state.cart.items.mobile)
  const laptop = useSelector((state) => state.cart.items.laptop)
  const tv = useSelector((state) => state.cart.items.tv)
  const cycle = useSelector((state) => state.cart.items.cycle)
  let count=0
  count = mobile.length + laptop.length + tv.length + cycle.length
  
  const add = (a, b) => {
   
    return {
        a,
        b
    }
  }
  

  if (n.islogin === true) {
    return (
      <div className='Parrent-NavBar'>
        <div className='left'>
         
            <div className='Circle'  style={{
            backgroundImage: `url(${profile})`,
            backgroundPosition: "center",
            backgroundSize: "cover", backgroundRepeat: "no-repeat",
            
        }}>
             
            </div>
            
        
          <div className='container-Name'>
         <Link to="/project/product"><h3><b>{n.name}</b></h3></Link>
        <Link to="/project/" onClick={() => dispatch(updateHome(add("", false)))}><h5>Logout</h5></Link>
          </div>

          </div>
          
        <div className='right'>
 <ul type="none" className="Container-NavBar">
    <Link to="/project/product"><li className='about'>Product</li></Link>
            <Link to="/project/cart"><li className='cart'>cart</li></Link>
            <span className='cart-circle'>{count}</span>
</ul>
        </div>          
       </div>
    )
  }
  else {
    return (
      <div className='Parrent-NavBar'>
        {/* <div className='left'>
          <div className='container-Circle'>
            <div className='Circle'>
           
            </div>
          </div>
        
          <div className='container-Name'>
         <Link to="/product"><h3><b>{}</b></h3></Link>
          </div>
        </div> */}
          
        <div className='right'>
    <ul type="none" className="Container-NavBar">
    <Link to="/project/"><li className='home'>Home</li></Link>
    <Link to="/project/about"><li className='about'>about</li></Link>
    
</ul>
        </div>          
      </div>
    )
  }
}

export default NavBar