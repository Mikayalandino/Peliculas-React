import './App.scss';
import "./Styles/Reset.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Series from './Components/Series';
import Search from './Components/Search';
import Error404 from './Components/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/series' element={<Series />}></Route>
        <Route path='/search' element= {<Search />}></Route>
        <Route path='/*' element= {<Error404 />}></Route>
      </Routes>
      
    </BrowserRouter>
    
  )
};

export default App;