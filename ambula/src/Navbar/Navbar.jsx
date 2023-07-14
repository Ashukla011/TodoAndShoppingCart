import React from 'react'
import { Link, } from 'react-router-dom'
import {FaShopify} from 'react-icons/fa'
export const Navbar = () => {
  return (
    <>
    <div style={{display:"flex" ,justifyContent:"space-around"}} >
        <ul style={{display:"flex" ,justifyContent:"space-between",gap:'20px'}}>
            <Link to='/' title="Home"><li style={{listStyle:"none"}}>Home</li></Link>
            <Link to='/about' title="About"><li style={{listStyle:"none"}}>About</li></Link>
            <Link to='/contact' title="Contact"><li style={{listStyle:"none"}}>Contact</li></Link>
            <Link to='/Todo'><li style={{listStyle:"none"}}>Todo-List</li></Link>
           
        </ul>

       <Link to='/cart'> <FaShopify style={{width:'100%',height:"50px"}}/></Link>
    </div>
    </>
  )
}
