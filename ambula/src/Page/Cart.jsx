import React, { useEffect, useState } from 'react'
 import styles from '../Styles/Cart.module.css'

export const Cart = () => {
    const [data,setData]=useState([])

const getData=()=>{
    let ProductInTheCart=JSON.parse(localStorage.getItem('ambula'))||[]
    setData(ProductInTheCart)
}

useEffect(()=>{
    getData()
},[])

const RemoveItem=(id)=>{
    let Remove=data.filter((el)=>{
      return   el.id!==id
    })
    setData (Remove)
}

  let Total=data.reduce((sum,el)=>{
    return sum+el.price
  },0)
  return (
    <>
        <div className={styles.cart}>
            <div className={styles.cart2}>
            {data.length===0?`Cart is empty`:data.map((product)=>(
            <div key={product.id} className={styles.productDiv2}>
              <div>
              <img src={product.image} alt="" style={{width:"50%"}}/>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
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
           <button onClick={()=>RemoveItem(product.id)}>remove</button>
           </div>
           ))}
            </div>

            <div className={styles.total}>
                <h1>{`Total Item : ${data.length}`}</h1>
                <h1>{`Sub Total  : ₹${Total.toFixed(2)}`}</h1>
            </div>
        </div>

        
    </>
  )
}
