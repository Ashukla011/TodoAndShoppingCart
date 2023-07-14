import React, { useEffect, useState } from 'react'
 

export const Cart = () => {
    const [data,setData]=useState([])

const getData=()=>{
    let ProductInTheCart=JSON.parse(localStorage.getItem('ambul'))||[]
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
        <div style={{display:'flex',justifyContent:"space-between",}}>
            <div style={{display:'flex',justifyContent:"space-between",}}>
            {data.length===0?`Cart is empty`:data.map((product)=>(
            <div key={product.id}>
              <div>
              <img src={product.image} alt="" style={{width:"10%"}}/>
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

            <div>
                <h1>{`Total Item : ${data.length}`}</h1>
                <h1>{`Sub Total  : ₹${Total}`}</h1>
            </div>
        </div>

        
    </>
  )
}
