import "./App.css";

import HomePage from "./pages/homePage";
import AllAnime from "./pages/AllAnime";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime" element={<AllAnime />} />
      </Routes>
    </>
  );
}

export default App;
