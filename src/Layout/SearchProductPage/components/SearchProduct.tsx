import React from 'react'
import ProductModel from '../../../models/ProductModel'
import { NavLink } from 'react-router-dom'

type Props = {
    product: ProductModel
}

const SearchProduct = (props: Props) => {
    return (
        <div className="col" >
            <div className="card p-3 mb-3">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center" style={{ height: '300px' }}>
                        <img src={props.product.img} className="img-fluid rounded-start" style={{ height: '100%', border: "2px solid black", borderRadius: "10px" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.product.name}</h5>
                            <p className="card-text">{props.product.description}</p>
                        </div>
                    </div>
                    <form className="col-md-4 mt-2 d-flex justify-content-center">
                        <NavLink className="btn fs-4 carouselbtn" to={`/checkout/${props.product.id}`} >Veja detalhes</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchProduct