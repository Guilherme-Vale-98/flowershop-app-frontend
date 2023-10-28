import React, { useEffect, useState } from 'react'
import Spinner from '../utils/Spinner';
import ProductModel from '../../models/ProductModel';
import SearchProduct from './components/SearchProduct';

type Props = {}

const SearchProductPage = (props: Props) => {


    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl: string = "http://localhost:8080/api/products";

            const url: string = `${baseUrl}?page=0&size=5`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching products!")
            }

            const responseJson = await response.json();
            const responseData = responseJson._embedded.products;

            const loadedProducts: ProductModel[] = [];

            for (const key in responseData) {
                loadedProducts.push({
                    id: responseData[key].id,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img
                })
            }

            setProducts(loadedProducts);
            setIsLoading(false);
        }

        fetchProducts().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    if (isLoading) {
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
        <div className='flower-bg' style={{backgroundRepeat: 'repeat-y'}}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="d-flex">
                            <input className='form-control me-4' type="search" placeholder='Search' aria-labelledby='Search' />
                            <button className='btn btn-outline-success'>Search</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Buquês</a></li>
                                <li><a className="dropdown-item" href="#">Cestas</a></li>
                                <li><a className="dropdown-item" href="#">Jarras</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Resultados: (9)</h5>
                    </div>
                    <p>5 de 9 itens</p>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-3">
                        {products.map(product => <SearchProduct product={product} key={product.id}/>)}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchProductPage