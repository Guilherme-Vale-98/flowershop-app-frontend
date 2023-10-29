import React, { useEffect, useState } from 'react'
import Spinner from '../utils/Spinner';
import ProductModel from '../../models/ProductModel';
import SearchProduct from './components/SearchProduct';
import Pagination from '../utils/Pagination';

type Props = {}

const SearchProductPage = (props: Props) => {

    const productsPerPage = 4;
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPages, setTotalPages] = useState(0);
    const [ totalProducts, setTotalProducts] = useState(0);
    

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl: string = "http://localhost:8080/api/products";
            
            const url: string = `${baseUrl}?page=${currentPage - 1}&size=${productsPerPage}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching products!")
            }

            const responseJson = await response.json();
            const responseData = responseJson._embedded.products;
            setTotalPages(responseJson.page.totalPages);
            setTotalProducts(responseJson.page.totalElements);

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
        window.scrollTo(0,0);
    }, [currentPage]);

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

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

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
                        <h5>Resultados: ({totalProducts})</h5>
                    </div>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
                        {products.map(product => <SearchProduct product={product} key={product.id}/>)}                 
                    </div>
                    {<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/> }
                </div>
            </div>
        </div>
    )
}

export default SearchProductPage