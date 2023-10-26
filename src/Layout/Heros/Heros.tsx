import React from 'react'

type Props = {}

const Heros = (props: Props) => {
    return (
        <div className=" flower-bg" style={{backgroundColor: '#FFFFFF'}} >
            <div className="container ">
                <div className="row align-items-center no-gutters">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className=" py-lg-0">
                            <p className=''>Sobre nós</p>
                            <h1 className="display-5 fw-bold">Conheça a My Flower Shop
                            </h1>
                            <p className=" mb-2 lead">
                                Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                            </p>
                            <a href="" className="btn btn-lg btn-success">Saiba mais</a>
                        </div>
                    </div>
                    <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
                        <img src="/images/personFlower.png" alt="" className="ms-5 img-fluid"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Heros