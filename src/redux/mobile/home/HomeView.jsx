import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateHome } from './Home'
import back from '../../../back.jpg'

const HomeView = () => {
    useEffect(() => {
        inputRef.current.focus()
   })
    const [input, setInput] = useState("")
    const n=useNavigate()
    const dispatch = useDispatch()
    
    const inputRef=useRef(null)
    const add = (a, b) => {
       
        if (inputRef.current.value !== "") {
            n("/product")
            return {
                a,
                b
            }
        }
        else {
        inputRef.current.focus()
        }
    }

    return (
     
        
        <div className='container-Home' style={{
            backgroundImage: `url(${back})`,
        }}>
            <label style={{color: "white"}} ><i>UserName</i></label>
            <input type="text"  value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} minLength={5} maxLength={10} required/> 
          <button  className='home-button' onClick={()=>dispatch(updateHome(add(input,true)))}><i>LogIn</i></button>
            </div>
           
  )
}

export default HomeView