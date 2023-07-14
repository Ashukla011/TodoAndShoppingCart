import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import {FaShopify} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <>
    <div style={{display:"flex" ,justifyContent:"space-around"}} >
        <ul style={{display:"flex" ,justifyContent:"space-between",gap:'20px'}}>
            <Link to='/' title="Home"><li>Home</li></Link>
            <Link to='/about' title="About"><li>About</li></Link>
            <Link to='/contact' title="Contact"><li>Contact</li></Link>
            {/* <Navigate to='/Todo'><li>Todo-List</li></Navigate> */}
           
        </ul>

       <Link to='/cart'> <FaShopify/></Link>
    </div>
    </>
  )
}
