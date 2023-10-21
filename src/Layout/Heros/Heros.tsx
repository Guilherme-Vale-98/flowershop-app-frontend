import React from 'react'

type Props = {}

const Heros = (props: Props) => {
    return (
        <div className=" p-4" style={{backgroundColor: '#FFFFFF'}} >
            <div className="container ">
                <div className="row align-items-center no-gutters">
                    <div className="col-xl-5 col-lg-6 col-md-12">
                        <div className="py-4  py-lg-0">
                            <p className=''>Sobre nós</p>
                            <h1 className="display-5 fw-bold">Conheça a My Flower Shop
                            </h1>
                            <p className=" mb-4 lead">
                                Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                            </p>
                            <a href="pages/course-filter-list.html" className="btn btn-success">Browse Courses</a>
                            <a href="pages/sign-in.html" className="btn btn-white">Are You Instructor?</a>
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