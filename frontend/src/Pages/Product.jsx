import React, { useContext, useEffect, useState } from 'react'

import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
// import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcums/Breadcums'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/Relatedproducts/RelatedProducts'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product= all_product.find((e) => e.id === Number(productId));
  return (
    <div>
    <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox product={product}/>
     <RelatedProducts />
    </div>
  )
}

export default Product

