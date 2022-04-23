import "./App.scss";
import "./Styles/Reset.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Search from "./Components/Search";
import Detalle from "./Components/Detalle";
import ListaMovies from "./Components/ListaMovies";
import ListaSeries from "./Components/ListaSeries";
import ListaTrending from "./Components/ListaTrending";
import Error404 from "./Components/Error404";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:title" element={<Search />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/movie/:category/page/:page" element={<ListaMovies />} />
        <Route path="/:tipo/:id/:info" element={<Detalle />} />
        <Route path="/tv" element={<Series />}></Route>
        <Route path="/tv/:category/page/:page" element={<ListaSeries />} />
        <Route path="/trending/:type/page/:page" element={<ListaTrending />} />
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
