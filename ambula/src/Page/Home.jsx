import React, { useEffect, useState } from 'react'
import styles from '../Styles/Home.module.css'
import { Footer } from '../Components/Footer'

export const Home = () => {
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(false)
  // Here i am using fake store api to fetch data from Api , and using fetch() to retrive data
   const Getdata=()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((res)=>{
        setData (res)
        console.log(res)
      })
      .catch((err)=>{
        return err
      })
   }

  // UseEffect for handling Side-effect
  useEffect(()=>{
    setLoading(true)
    Getdata()
    setLoading(false)
  },[])

  if(loading){
    return <h1 style={{textAlign:"center"}}>Please Wait</h1>
  }

  let ProductInTheCart=JSON.parse(localStorage.getItem("ambula"))||[]
   function HandleLocalStorage(el){
    ProductInTheCart.push(el)
    localStorage.setItem("ambula",JSON.stringify(ProductInTheCart))
    alert(`${el.title} add to the cart`)
   }


  return (
    <>
        <div className={styles.productDiv}>
           
           {data.map((product)=>(
            <div key={product.id} className={styles.productDiv2}>
              <div>
              <img src={product.image} alt="" />
              <h2>{product.title}</h2>
              <p>{`₹${product.price}`}</p>
                </div>
             <div className="rating">
             ({product.rating.count} reviews)
             <span className="stars">
               {Array.from({ length: Math.floor(product.rating.rate) }, (_, index) => (
                 <span key={index} className="star">&#9733;</span>
               ))}
             </span>
           </div>
           <button onClick={()=>HandleLocalStorage(product)} className={styles.addToCart} >Add To Cart</button>
           </div>
           ))}
        </div>
        <Footer/>
    </>
  )
}
