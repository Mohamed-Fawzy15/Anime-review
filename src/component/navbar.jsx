import "../style/navbarStyle.css";

import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="navBar navbar navbar-expand-lg navbar-dark position-fixed py-3">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center gap-1 me-0"
            href="#"
          >
            <img src={logo} alt="Anime review Logo" width="50px" />
            <p className="mb-0">Anime</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/anime">
                  Animes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Character
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
