import { useState, useEffect } from "react";

import "../style/AllAnimeStyle.css";

const AllAnime = () => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData("anime");
  }, []);

  const getData = async (name) => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/${name}`);
      if (res.ok) {
        const data = await res.json();
        setAnimeList(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch data:", err.status);
    }
  };

  function truncateDescription(description, wordLimit) {
    const words = description.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : description;
  }

  const handleSearch = (value) => {
    setSearch(value);
  };

  const filteredAnimeList = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(search)
  );
  return (
    <>
      <header className="allAnime-header d-flex justify-content-center align-items-center">
        <div className="container">
          <form className="d-flex align-items-center gap-2 section-space">
            <input
              type="text"
              placeholder="Search for anime"
              className="form-control"
              name="animeName"
              id="animeName"
              onChange={(e) => handleSearch(e.target.value)}
              value={search}
            />
            <button className="btn btn-outline-primary">Search</button>
          </form>
        </div>
      </header>

      <main className="animeList my-5">
        <div className="portfolio-nav">
          <nav>
            <div
              className="nav nav-tabs justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-all-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-all"
                type="button"
                role="tab"
                aria-controls="nav-all"
                aria-selected="true"
                onClick={() => getData("anime")}
              >
                All Anime
              </button>
              <button
                className="nav-link"
                id="nav-brand-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-brand"
                type="button"
                role="tab"
                aria-controls="nav-brand"
                aria-selected="false"
                onClick={() => getData("top/anime")}
              >
                Top Anime
              </button>
              <button
                className="nav-link"
                id="nav-design-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-design"
                type="button"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
                onClick={() => getData("manga")}
              >
                Manga
              </button>
            </div>
          </nav>
        </div>

        <section>
          <div className="container">
            <div className="tab-content d-flex" id="nav-tabContent">
              <div
                className="tab-pane fade show active row gy-2"
                id="nav-all"
                role="tabpanel"
                aria-labelledby="nav-all-tab"
                tabIndex="0"
              >
                <div className="row gy-2 m-auto section-space card-container">
                  {filteredAnimeList.map((anime) => (
                    <div
                      key={anime.mal_id}
                      className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 card-item"
                    >
                      <div className="homePage-img overflow-hidden">
                        <img
                          src={anime.images.webp.image_url}
                          alt="Canon EOS R5 image"
                          className="w-100"
                        />
                      </div>
                      <div className="homePage-inner rounded shadow p-3">
                        <div>
                          <h3 className="text-capitalize h5">{anime.title}</h3>
                          <p className="homePage-info my-2">
                            {truncateDescription(anime.synopsis, 20)}
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <p className="mb-0">Rating</p>
                              <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <h4>{anime.score}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-brand"
                role="tabpanel"
                aria-labelledby="nav-brand-tab"
                tabIndex="0"
              >
                <div className="row gy-2 m-auto section-space card-container">
                  {filteredAnimeList.map((anime) => (
                    <div
                      key={anime.mal_id}
                      className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 card-item"
                    >
                      <div className="homePage-img overflow-hidden">
                        <img
                          src={anime.images.webp.image_url}
                          alt="Canon EOS R5 image"
                          className="w-100"
                        />
                      </div>
                      <div className="homePage-inner rounded shadow p-3">
                        <div>
                          <h3 className="text-capitalize h5">{anime.title}</h3>
                          <p className="homePage-info my-2">
                            {truncateDescription(anime.synopsis, 20)}
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <p className="mb-0">Rating</p>
                              <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <h4>{anime.score}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-design"
                role="tabpanel"
                aria-labelledby="nav-design-tab"
                tabIndex="0"
              >
                <div className="row gy-2 m-auto section-space card-container">
                  {filteredAnimeList.map((anime) => (
                    <div
                      key={anime.mal_id}
                      className="homePage-card col-12 col-md-6 col-lg-3 rounded-2 card-item"
                    >
                      <div className="homePage-img overflow-hidden">
                        <img
                          src={anime.images.webp.image_url}
                          alt="Canon EOS R5 image"
                          className="w-100"
                        />
                      </div>
                      <div className="homePage-inner rounded shadow p-3">
                        <div>
                          <h3 className="text-capitalize h5">{anime.title}</h3>
                          <p className="homePage-info my-2">
                            {truncateDescription(anime.synopsis, 20)}
                          </p>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <p className="mb-0">Rating</p>
                              <i className="fa-solid fa-star text-warning"></i>
                            </div>
                            <h4>{anime.score}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllAnime;
