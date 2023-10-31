import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductModel from '../../models/ProductModel'

type Props = {
    product: ProductModel
}

const CheckoutReviewBox = (props: Props) => {
  return (
    <div className="card col-md-4">
                    <div className="card-body ">
                        <h3 className="card-text">Preço: R${props.product?.price}</h3>
                        <h4 style={{ color: "green" }}>Disponível</h4>
                        <div className='row mt-4' >
                            <p className='col-6 lead fs-5'><b>{props.product?.copies}</b> em estoque</p>
                            <p className="col-6 lead fs-5   "><b>{props.product?.copiesAvailable}</b> disponível</p>
                        </div>
                        <NavLink className='mt-3 btn btn-success btn-lg' to={"/#"}>Login</NavLink>
                    </div>
                </div>
  )
}

export default CheckoutReviewBox