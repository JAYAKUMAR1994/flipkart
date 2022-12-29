import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from 'react-router-dom'
import { addToCart,removeToCart } from './Cart'

const CartView = () => {
  const [count, setCount] = useState(1)
  let [product,setProduct]=useState(["mobile","laptop","tv","cycle"])
  const h = useSelector((state) => state.home)
  const n = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  
  const add = (img, price, id, brand,name,cartitem,check) => {
   
      return {
        img,price,id,brand,count:1,name,cartitem,check
      }
 
}
 
  if (h.islogin === true) {
    return (
      <div >
        <div className='container-Mobile'>
         
          {product.map((pro) => (
            n[pro].map((item) => (<div key={item.name}>
              <div key={ item.id} className='Parrent-Mobile'>
                <h1>{item.brand}</h1>
                <div>
                  <img src={item.img} alt="error" width="100px" height="100px"></img>
                </div>
                <h3>Price : <mark>{item.price}</mark></h3>
                <h3>{item.cartitem}</h3>
                <button className="container-button" onClick={() =>dispatch(addToCart(add(item.img,item.price,item.id,item.brand,item.name,item.cartitem,"plus"))) }>+</button>
                <button onClick={() =>dispatch(addToCart(add(item.img,item.price,item.id,item.brand,item.name,item.cartitem,"minus")))}>-</button>
              </div>
        </div>
            ))))
          }
        </div>
      </div>
    )
  }
  else {
    return (
        <Navigate to="/"/>
    )
}
}

export default CartView