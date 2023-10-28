
import { faFacebook, faInstagram, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
            <footer className="text-center text-white text-lg-start "
                style={{ backgroundColor: "#190B2F", fontSize: "1.5rem" }}
            >
                <div className="container p-4 pb-0">

                    <section className="">

                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h2 className="text-uppercase mb-4 font-weight-bold">
                                    My Flower Shop
                                </h2>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" style={{fontSize: '1.2rem'}}>
                                <h3 className="text-uppercase mb-4 font-weight-bold">
                                   Empresa
                                </h3>
                                <p>
                                    Home
                                </p>
                                <p>
                                    Services
                                </p>
                                <p>
                                    Features
                                </p>
                                <p>
                                   About us
                                </p>
                            </div>


                            <hr className="w-100 clearfix d-md-none" />


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> flowershop@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>
                    </section>


                    <hr className="my-3" />


                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-lg-8 text-center text-md-start">

                                <div className="p-3">
                                    © 2024 Copyright:
                                    <a className="" href="https://mdbootstrap.com/"
                                    >MDBootstrap.com </a>
                                </div>

                            </div>



                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <a
                                    className="btn text-white btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                                <a
                                    className="btn text-white btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                                <a
                                    className="btn text-white btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
                                <a
                                    className="btn text-white btn-floating m-1"
                                    role="button"
                                ><FontAwesomeIcon icon={faThreads} size='2x' /></a>
                            </div>

                        </div>
                    </section>
                </div>
            </footer>
    )
}

export default Footer