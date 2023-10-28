import React from 'react'

type Props = {}

const ProductCard = (props: Props) => {
    return (
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
    )
}

export default ProductCard