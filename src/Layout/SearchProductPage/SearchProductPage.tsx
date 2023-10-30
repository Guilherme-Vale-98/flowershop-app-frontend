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
    const [ search, setSearch] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [category, setCategory] = useState("Categorias");
    

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl: string = "http://localhost:8080/api/products";
            let url: string = "";
            if (searchUrl === ""){
                url = `${baseUrl}?page=${currentPage - 1}&size=${productsPerPage}`;
            } else{
                let searchPageUrl = searchUrl.replace("<pageNumber>", `${currentPage-1}`)
                url = baseUrl + searchPageUrl;
            }


      

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
    }, [currentPage, searchUrl]);

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

    const categoryField = (value: string)=>{
        setCurrentPage(1)
        if(
            value.toLowerCase() === "buquês" ||
            value.toLowerCase() === "cestas" ||
            value.toLowerCase() === "jarras"
        ){
            setCategory(value)
            setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${productsPerPage}`)
        }else{
            setCategory("All");
            setSearchUrl(`?page=<pageNumber>&size=${productsPerPage}`)
        }
    }

    const handleSearchChange = ()=>{
        setCurrentPage(1)
        if (search===""){
            setSearchUrl('')
        }else{
            setSearchUrl(`/search/findByNameContaining?name=${search}&page=<pageNumber>&size=${productsPerPage}`)
        }
        setCategory("Categorias")
    }

    const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='flower-bg' style={{backgroundRepeat: 'repeat-y', minHeight: "40vh"}}>
            <div className="container">
                <div className="row mt-2">
                    <div className="col-6">
                        <div className="d-flex">
                            <input className='form-control me-4' type="search" placeholder='Buscar Produtos' aria-labelledby='Search' onChange={e => setSearch(e.target.value)} />
                            <button className='btn btn-outline-success' onClick={()=> handleSearchChange()}>Search</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" style={{backgroundColor: "#E7B3B3", color: "black"}}  aria-expanded="false">
                                {category}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li onClick={() => categoryField("Buquês")}><a className="dropdown-item" href="#">Buquês</a></li>
                                <li onClick={() => categoryField("Cestas")}><a className="dropdown-item" href="#">Cestas</a></li>
                                <li onClick={() => categoryField("Jarras")}><a className="dropdown-item" href="#">Jarras</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Resultados: ({totalProducts})</h5>
                    </div>
                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2">
                        {products.map(product => <SearchProduct product={product} key={product.id}/>)}                 
                    </div>
                    {totalProducts > 0 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/> }
                </div>
            </div>
        </div>
    )
}

export default SearchProductPage