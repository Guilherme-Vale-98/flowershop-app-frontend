import React, { useEffect, useState } from 'react'
import ProductModel from '../../models/ProductModel'

type Props = {}

const Carousel = (props: Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [httpError, setHttpError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () =>{
            const baseUrl: string = "http://localhost:8080/api/products";

            const url: string = `${baseUrl}?page=0&size=3`;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Error fetching products!")
            }

            const responseJson = await response.json();
            const responseData = responseJson._embedded.products;

            const loadedProducts: ProductModel[] = [];

            for (const key in responseData){
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

    if(isLoading){
        return (
            <div className='container m-5'>
                <p>Carregando...</p>
            </div>
        )
    }

    if(httpError){
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }


    return (
        <div id="carouselExampleControls" className="carousel carousel-dark slide w-75" data-bs-ride="carousel">
            <div className="carousel-inner py-5">
                <div className="carousel-item active">
                    <div className="row ">
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/orchid.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Orchids</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/rose.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Roses</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/orchid.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Orchids</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                <div className="row ">
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/orchid.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Orchids</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/rose.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Roses</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 me-5 ms-5 ">
                            <div className="card sectioncard" >
                                <div className='img-wrapper'>
                                    <img src="images/orchid.png" className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Orchids</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <form className="d-flex justify-content-center">
                                        <button className="btn fs-4 carouselbtn" type="submit">Veja detalhes</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    )
}

export default Carousel