import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin_Assets/upload_area.svg'
const AddProduct = () => {
    const [image, setImage] = useState(false);
     const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async() =>{
    console.log("Product Details:", productDetails);
    let responsedata;
    let product =productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
        method: 'POST',
        headers:{
            Accept:'application/json',
        },
        body: formData,
    }).then((resp)=>resp.json()).then((data)=>{
        responsedata = data;
        
    })
    if(responsedata.success){
        product.image = responsedata.image_url;
        console.log(product);
        await fetch('http://localhost:4000/add-product', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
        .then((resp) => resp.json()).then((data)=>{
            data.success? alert("Product added successfully") : alert("Something went wrong");
        })
    }
  }


  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
            </div>
             <div className="addproduct-itemfield">
                <p>offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
            </div>
            
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select  value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kids</option>
            
            </select>
        </div>
 <div className="addproduct-itemfield">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image) :upload_area} className='addproduct-thumnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
    </div>
    <button onClick={()=>{Add_Product()}}className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct