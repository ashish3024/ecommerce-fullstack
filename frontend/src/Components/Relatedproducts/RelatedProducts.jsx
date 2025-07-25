import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/Frontend_Assets/data'
const RelatedProducts = () => {
     return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item,index)=>{
        
            return <Item key={index} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
          
        })}
      </div>
    </div>
  )
}

export default RelatedProducts