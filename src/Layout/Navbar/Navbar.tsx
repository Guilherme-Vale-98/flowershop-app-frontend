import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Navbar = (props: Props) => {
  return (
<nav className="navbar fs-4 purple navbar-expand-lg navbar-light">
  <div className="text-white container-fluid">
    <NavLink className="navbar-brand text-white fs-2 ms-5 ps-5" to="/home">My Flower Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse ps-5 ms-5 navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-white" aria-current="page" to="/home">Início</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  text-white" to="/search">Buscar Produtos</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn fs-4 btn-outline-success" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar