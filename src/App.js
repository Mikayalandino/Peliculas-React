import './App.scss';
import "./Styles/Reset.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Search from './Components/Search';
import Detalle from './Components/Detalle';
import CategoriaMovies from './Components/CategoriaMovies';
import CategoriaSeries from './Components/CategoriaSeries';
import Error404 from './Components/Error404';
import Footer from './Components/Footer';

import {useState} from "react";
import Context from "./Components/Context";

const App = () => {

  const [lenguage, setLenguage] = useState("es")

  const context = {
    lenguage: lenguage,
    setLenguage: setLenguage,
  }

  return (
    <BrowserRouter>
      <Context.Provider value={context}>
        <Nav />
      </Context.Provider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search/:title' element={<Search />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path="/movie/:category/page/:page" element={<CategoriaMovies />} />   
        <Route path="/:tipo/:id/:info" element={<Detalle />} /> 
        <Route path='/tv' element={<Series />}></Route>
        <Route path="/tv/:category/page/:page" element={<CategoriaSeries/>} />
        <Route path='/*' element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;