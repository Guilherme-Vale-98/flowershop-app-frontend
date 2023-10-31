import React from 'react'
import ProductModel from '../../models/ProductModel';
import { NavLink } from 'react-router-dom';


type Props = {
    product: ProductModel;
}

const productCard = (props: Props) => {
    return (
        <div className="col-lg-3 me-5 ms-5 ">
        <div className="card sectioncard" >
            <div className='img-wrapper'>
                <img src={props.product.img} height='300' className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title fs-3">{props.product.name}</h5>
                <p style={{width: '100%', height: 40}} className="card-text">{props.product.description}</p>
                <form className="d-flex justify-content-center">
                    <NavLink className="btn fs-4 carouselbtn" to={`/checkout/${props.product.id}`}>Veja detalhes</NavLink>
                </form>
            </div>
        </div>
        </div>
    )
}

export default productCard