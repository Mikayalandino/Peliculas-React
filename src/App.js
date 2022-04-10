import './App.scss';
import "./Styles/Reset.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Search from './Components/Search';
import DetalleMovie from './Components/DetalleMovie';
import DetalleSerie from './Components/DetalleSerie';
import Error404 from './Components/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/tv' element={<Series />}></Route>
        <Route path='/search' element= {<Search />}></Route>
        <Route path="/movie/:id/:info" element={<DetalleMovie />} />
        <Route path="/tv/:id/:info" element={<DetalleSerie />} />
        <Route path="/movies/:category/page/:pagina" element={<CategoriaMovies />} />                  
        <Route path="/tv/:category/page/:pagina" element={<CategoriaSeries/>} />
        <Route path='/*' element= {<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;