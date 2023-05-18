// import logo from "../logo.svg";
import MovieCard from "../components/MovieCard";
import Movies from "../components/Movies";
import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import MoviesModule from "../Modules/MoviesModule";
const Home = lazy(() => import("../pages/Home"));

const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  return (
    // <>
    //   {/* <MovieCard></MovieCard> */}
    //   <Movies />
    // </>
    <div className="App">
      <Suspense fallback={<div>Loading........</div>}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route
              path="movies/*"
              element={<MoviesModule></MoviesModule>}
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
