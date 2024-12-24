import logo from "../assets/cameraStorelogo.png";
import "../style/footerStyle.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-inner">
                <header className="d-flex align-items-center gap-3">
                  <img
                    src={logo}
                    alt="Camera shop logo"
                    className="footer-img"
                  />
                  <h3 className="mb-0">Camera Shop Logo</h3>
                </header>

                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita, veritatis.
                </p>

                <div className="footer-social text-center">
                  <header className="mb-3">
                    <h4>Social Media</h4>
                  </header>

                  <ul className="list-unstyled d-flex justify-content-between my-4">
                    <li>
                      <a href="www.facebook.com">
                        <i className="fa-brands fa-facebook-f fs-3"></i>
                      </a>
                    </li>
                    <li>
                      <a href="www.google.com">
                        <i className="fa-brands fa-google fs-3"></i>
                      </a>
                    </li>
                    <li>
                      <a href="www.twitter.com">
                        <i className="fa-brands fa-x-twitter fs-3"></i>
                      </a>
                    </li>
                    <li>
                      <a href="www.linkedin.com">
                        <i className="fa-brands fa-linkedin-in fs-3"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-inner">
                <header>
                  <h4>Subscribe our Newsletter</h4>
                </header>
                <p className="my-3">
                  Don&apos;t miss out on our latest menu updates and exclusive
                  offers - join our newsletter today and stay up-to-date with
                  all things Camera Shop!
                </p>

                <form className="d-flex justify-content-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    name="email"
                    id="userEmail"
                  />
                  <button className="btn btn-dark d-flex align-items-center justify-content-center gap-2">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="mb-0">Subscribe</p>
                  </button>
                </form>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-inner">
                <header>
                  <h4>Get in Touch</h4>
                </header>

                <ul className="list-unstyled">
                  <li className="d-flex gap-3 align-items-center">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="mb-0">16 st Sidi-Gaber, Alexandria, Egypt</p>
                  </li>
                  <li className="d-flex gap-3 align-items-center my-3">
                    <i className="fa-solid fa-envelope"></i>
                    <p className="mb-0">info@example.com</p>
                  </li>
                  <li className="d-flex gap-3 align-items-center">
                    <i className="fa-solid fa-phone"></i>
                    <p className="mb-0">+20 1234567891</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
