import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
<nav className="navbar fs-4 purple navbar-expand-lg navbar-light">
  <div className="text-white container-fluid">
    <a className="navbar-brand text-white ms-5 ps-5" href="#">FLAUER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse ps-5 ms-5 navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Shop</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Buquês</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar