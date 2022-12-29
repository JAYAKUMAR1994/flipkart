import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,removeToCart } from './Cart/Cart'

const MobileView = () => {
  const[count,setCount]=useState(0)
  const dispatch=useDispatch()
  const n = useSelector((state) => state.mobile)
  
  const add = (img,price,id,brand) => {
    return {
      img,price,id,brand,count:count+1,name:"mobile",cartitem:0
    }
  }
  return (
      <div className='container-Mobile'>
      {n.mobile.map((item) => (
        <div key={item.id} className='Parrent-Mobile'>
          <h1>{item.brand}</h1>
          <div>
          <img src={item.img} alt="error" width="100px" height="100px"></img>
          </div>
          <h3>Price : <mark>{item.price}</mark></h3>
          <h3>{}</h3>
          <button className="container-button" onClick={()=>dispatch(addToCart(add(item.img,item.price,item.id,item.brand)))}>AddToCart</button>
          <button onClick={()=>dispatch(removeToCart(add(item.img,item.price,item.id,item.brand)))}>RemoveToCart</button>
        </div>
        
          ))}
    </div>
  )
}

export default MobileView