import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Home } from './Home'
import { NotFound } from './NotFound'
import   {About}      from './About'
import   {Contact}    from './Contact'
import { Cart } from './Cart'
export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </>
  )
}
