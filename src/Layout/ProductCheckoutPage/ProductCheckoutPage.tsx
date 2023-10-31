import React, { useState } from 'react'
import ProductModel from '../../models/ProductModel'

type Props = {}

const ProductCheckoutPage = (props: Props) => {

    const [product, setProduct] = useState<ProductModel>();
    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const productId = (window.location.pathname).split('/')[2];


  return (
    <div>ProductCheckoutPage</div>
  )
}

export default ProductCheckoutPage