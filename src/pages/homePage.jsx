import "../style/HomePageStyle.css";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [animeList, setAnimeList] = useState([]);
  const [activeButtonId, setActiveButtonId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await fetch(`https://kitsu.io/api/edge/anime`);
      if (res.ok) {
        const data = await res.json();
        setAnimeList(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch data:", err.status);
    }
  }

  function truncateDescription(description, wordLimit) {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  }

  const handleButtonClick = (id) => {
    setActiveButtonId(id); // Set the active button ID
  };
  return (
    <>
      <header className="hero">
        <h2 className="h5">Welcome To</h2>
        <h1>Anime review</h1>
        <p className="text-center px-5">
          A very warm welcome to you! It s lovely to have you among us.
        </p>
      </header>

      <section className="homePage section-space">
        <div className="container">
          <header className="d-flex justify-content-center pb-5">
            <h2 className="section-header text-capitalize">best anime</h2>
          </header>
          <div className="row gy-3">
            {animeList.slice(0, 4).map((anime) => (
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
                    <h3 className="text-capitalize h5">
                      {anime.attributes.titles.en}
                    </h3>
                    <p className="homePage-info my-2">
                      {truncateDescription(anime.attributes.description, 20)}
                    </p>
                    <div className="d-flex align-items-center justify-content-between my-2">
                      <div>
                        <p className="mb-0 text-center fw-bold">Start In</p>
                        <span>{anime.attributes.startDate}</span>
                      </div>
                      <div>
                        <p className="mb-0 text-center fw-bold">End In</p>
                        <span>{anime.attributes.endDate}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <p className="mb-0">Rating</p>
                        <i className="fa-solid fa-star text-warning"></i>
                      </div>
                      <h4>{anime.attributes.averageRating}</h4>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <button className="btn btn-homePage w-100">
                        View Details
                      </button>
                      <button
                        className={`btn btn-favorite ${
                          activeButtonId === anime.id ? "active" : ""
                        }`}
                        onClick={() => handleButtonClick(anime.id)}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
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
            <div className="category-card col-12 col-md-6 col-lg-3">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <i className="fa-solid fa-arrow-up fs-1"></i>
                </div>
                <p className="fs-3">Top Anime</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-6 col-lg-3">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <i className="fa-solid fa-cubes fs-1"></i>
                </div>
                <p className="fs-3">Most Anime</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-6 col-lg-3">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <i className="fa-solid fa-users fs-1"></i>
                </div>
                <p className="fs-3">Charcater</p>
              </div>
            </div>
            <div className="category-card col-12 col-md-6 col-lg-3">
              <div className="category-inner d-flex justify-content-center align-items-center flex-column">
                <div className="card-icon overflow-hidden">
                  <i className="fa-solid fa-book-open fs-1"></i>
                </div>
                <p className="fs-3">Manga</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homePage section-space">
        <div className="container">
          <header className="d-flex justify-content-center pb-5">
            <h2 className="section-header text-capitalize">best anime</h2>
          </header>
          <div className="row gy-3">
            {animeList.slice(5, 9).map((anime) => (
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
                    <h3 className="text-capitalize h5">
                      {anime.attributes.titles.en}
                    </h3>
                    <p className="homePage-info my-2">
                      {truncateDescription(anime.attributes.description, 19)}
                    </p>
                    <div className="d-flex align-items-center justify-content-between my-2">
                      <div>
                        <p className="mb-0 text-center fw-bold">Start In</p>
                        <span>{anime.attributes.startDate}</span>
                      </div>
                      <div>
                        <p className="mb-0 text-center fw-bold">End In</p>
                        <span>{anime.attributes.endDate}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <p className="mb-0">Rating</p>
                        <i className="fa-solid fa-star text-warning"></i>
                      </div>
                      <h4>{anime.attributes.averageRating}</h4>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <button className="btn btn-homePage w-100">
                        View Details
                      </button>
                      <button
                        className={`btn btn-favorite ${
                          activeButtonId === anime.id ? "active" : ""
                        }`}
                        onClick={() => handleButtonClick(anime.id)}
                      >
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
