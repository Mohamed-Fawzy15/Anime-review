import "../style/HomePageStyle.css";

import image1 from "../assets/product.jpeg";
import image2 from "../assets/image3.jpg";
import image3 from "../assets/audio.jpg";
import image4 from "../assets/bags.jpg";
import image5 from "../assets/memory.jpg";
import image6 from "../assets/access.jpg";

import NavBar from "../component/navbar";
import Footer from "../component/footer";

import { useState, useEffect } from "react";

const HomePage = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch("https://kitsu.io/api/edge/anime");
      if (res.ok) {
        const data = await res.json();
        setAnimeList(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch data:", err.status);
    }
  }

  console.log(animeList);

  return (
    <>
      <NavBar />
      <header className="hero">
        <h2 className="h5">Welcome To</h2>
        <h1>Camera Shop</h1>
        <p className="text-center px-5">
          A very warm welcome to you! It s lovely to have you among us.
        </p>
      </header>

      <section className="homePage section-space">
        <div className="container">
          <header className="d-flex justify-content-center pb-5">
            <h2 className="section-header text-capitalize">best seller</h2>
          </header>
          <div className="row gy-3">
            {animeList.map((anime) => (
              <div
                key={anime.id}
                className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 "
              >
                <div className="homePage-img overflow-hidden">
                  <img
                    src={anime.attributes.posterImage.large}
                    alt="Canon EOS R5 image"
                    className="w-100"
                  />
                </div>
                <div className="homePage-inner rounded shadow p-3">
                  <div>
                    <h3>Canon EOS R5</h3>
                    <div className="homePage-prices d-flex gap-3">
                      <p className="text-decoration-line-through mb-0">
                        30000 EGP
                      </p>
                      <p className="mb-0">25000 EGP</p>
                    </div>
                    <p className="homePage-info my-2">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Minus nesciunt sequi eius qui repellat sapiente molestias
                      ipsa reprehenderit accusamus asperiores.
                    </p>
                    <p className="item-number">1 item left</p>
                    <button className="btn btn-homePage w-100">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="category section-color section-space">
        <div className="container">
          <header className="d-flex justify-content-center pb-5">
            <h2 className="section-header text-white py-3">Categories</h2>
          </header>
          <div className="row gy-3">
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image1} alt="" className="w-100" />
                </div>
                <p className="fs-3">Cameras</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image2} alt="" className="w-100" />
                </div>
                <p className="fs-3">Lenses</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image3} alt="" className="w-100" />
                </div>
                <p className="fs-3">Audio</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image4} alt="" className="w-100" />
                </div>
                <p className="fs-3">Bags</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image5} alt="" className="w-100" />
                </div>
                <p className="fs-3">Memory Card</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-4 col-lg-2">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <img src={image6} alt="" className="w-100" />
                </div>
                <p className="fs-3">Accessories</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homePage section-space">
        <div className="container">
          <header className="d-flex justify-content-center pb-5">
            <h2 className="section-header text-capitalize">best seller</h2>
          </header>
          <div className="row gy-3">
            <div className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 ">
              <div className="homePage-img overflow-hidden">
                <img src={image1} alt="Canon EOS R5 image" className="w-100" />
              </div>
              <div className="homePage-inner rounded shadow p-3">
                <div>
                  <h3>Canon EOS R5</h3>
                  <div className="homePage-prices d-flex gap-3">
                    <p className="text-decoration-line-through mb-0">
                      30000 EGP
                    </p>
                    <p className="mb-0">25000 EGP</p>
                  </div>
                  <p className="homePage-info my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nesciunt sequi eius qui repellat sapiente molestias
                    ipsa reprehenderit accusamus asperiores.
                  </p>
                  <p className="item-number">1 item left</p>
                  <button className="btn btn-homePage w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 ">
              <div className="homePage-img overflow-hidden">
                <img src={image1} alt="Canon EOS R5 image" className="w-100" />
              </div>
              <div className="homePage-inner rounded shadow p-3">
                <div>
                  <h3>Canon EOS R5</h3>
                  <div className="homePage-prices d-flex gap-3">
                    <p className="text-decoration-line-through mb-0">
                      30000 EGP
                    </p>
                    <p className="mb-0">25000 EGP</p>
                  </div>
                  <p className="homePage-info my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nesciunt sequi eius qui repellat sapiente molestias
                    ipsa reprehenderit accusamus asperiores.
                  </p>
                  <p className="item-number">1 item left</p>
                  <button className="btn btn-homePage w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 ">
              <div className="homePage-img overflow-hidden">
                <img src={image1} alt="Canon EOS R5 image" className="w-100" />
              </div>
              <div className="homePage-inner rounded shadow p-3">
                <div>
                  <h3>Canon EOS R5</h3>
                  <div className="homePage-prices d-flex gap-3">
                    <p className="text-decoration-line-through mb-0">
                      30000 EGP
                    </p>
                    <p className="mb-0">25000 EGP</p>
                  </div>
                  <p className="homePage-info my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nesciunt sequi eius qui repellat sapiente molestias
                    ipsa reprehenderit accusamus asperiores.
                  </p>
                  <p className="item-number">1 item left</p>
                  <button className="btn btn-homePage w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 ">
              <div className="homePage-img overflow-hidden">
                <img src={image1} alt="Canon EOS R5 image" className="w-100" />
              </div>
              <div className="homePage-inner rounded shadow p-3">
                <div>
                  <h3>Canon EOS R5</h3>
                  <div className="homePage-prices d-flex gap-3">
                    <p className="text-decoration-line-through mb-0">
                      30000 EGP
                    </p>
                    <p className="mb-0">25000 EGP</p>
                  </div>
                  <p className="homePage-info my-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus nesciunt sequi eius qui repellat sapiente molestias
                    ipsa reprehenderit accusamus asperiores.
                  </p>
                  <p className="item-number">1 item left</p>
                  <button className="btn btn-homePage w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
