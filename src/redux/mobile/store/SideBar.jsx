import React, { useEffect } from 'react'
import { Link,Navigate,Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';


const SideBar = () => {
    const n = useSelector((state) => state.home)
   
   
    
    if (n.islogin===true) {
        return (
            <div className='Parrent-SideBar'>
                <div className='child1'>
                <ul type="circle" className="container-SideBar">
                    <Link to="mobile"><li>Mobiles</li></Link>
                    <Link to="tv"><li>Tv</li></Link>
                    <Link to="laptop"><li>Laptop</li></Link>
                    <Link to="cycle"><li>Cycles</li></Link>
                    </ul>  
                </div>
                <div className='child2'>
                <Outlet/>
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

export default SideBar