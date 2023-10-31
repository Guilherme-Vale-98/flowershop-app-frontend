import React, { useEffect, useState } from 'react'
import ProductModel from '../../models/ProductModel'
import Spinner from '../utils/Spinner';
import StarReview from '../utils/StarReview';
import { Link, NavLink } from 'react-router-dom';
import CheckoutReviewBox from './CheckoutReviewBox';




type Props = {}

const ProductCheckoutPage = (props: Props) => {

    const [product, setProduct] = useState<ProductModel>();
    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const productId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl: string = `http://localhost:8080/api/products/${productId}`;

            const response = await fetch(baseUrl);


            if (!response.ok) {
                throw new Error("Error fetching product!")
            }

            const responseJson = await response.json();

            const loadedProduct: ProductModel = {
                id: responseJson.id,
                name: responseJson.name,
                price: responseJson.price,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copiesAvailable,
                category: responseJson.category,
                img: responseJson.img
            };

            setProduct(loadedProduct);
            setIsLoadingProduct(false);
        }

        fetchProducts().catch((error: any) => {
            setIsLoadingProduct(false);
            setHttpError(error.message);
        })
    }, []);
    if (isLoadingProduct) {
        return (
            <Spinner></Spinner>
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }




    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="my-4 d-flex justify-content-center">
                        <img src={product?.img}
                            className="img-fluid smaller-image" alt="..." />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="my-4">
                        <h2>{product?.name}</h2>
                        <hr />
                        <p>{product?.description}</p>
                        <StarReview rating={4.5} />
                    </div>
                </div>
                {product && <CheckoutReviewBox product={product}></CheckoutReviewBox>}

            </div>
        </div>
    )
}

export default ProductCheckoutPage