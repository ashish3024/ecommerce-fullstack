import React from 'react'
import './ListProduct.css'
import { use } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cross_icon from '../../assets/Admin_Assets/cross_icon.png';
const ListProduct = () => {


  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo =async () =>{
     await fetch('http://localhost:4000/allproducts').then((res) => res.json())
     .then((data)=>{setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product=async(id)=>{
     await fetch('http://localhost:4000/deleteproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
body:JSON.stringify({id:id})
      
     
  })
  await fetchInfo();
}

  return (
   <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img className="listproduct-product-icon" src={product.image} alt="" />
              <p className="cartitems-product-title">{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img  onClick={()=>remove_product(product.id)} className="listproduct-remove-icon"  src={cross_icon} alt="" />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListProduct