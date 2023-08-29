import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './common/Nav';
import Home from './Page/home/Home'
import { Originals } from './Page/watchlist/originals/Originals';
import { Series } from './Page/watchlist/search/series/Series';
import { Movies } from './Page/watchlist/movies/Movies';
import { Search } from './Page/watchlist/search/Search';
import { Detail } from './Page/detail/components/Detail';
import {Watchlist} from  './Page/watchlist/Watchlist';
import { useEffect } from 'react';







function App() {

  

  return (
    <div>
      <Nav />


      <div className='mainContainer'>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/detail/:name' element={<Detail />} />
          <Route path='/search' element={<Search />} />
          <Route path='/series' element={<Series />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/originals' element={<Originals />} />
          <Route path='/watchlist' element={<Watchlist/>}/>


          


        </Routes>



      </div>









    </div>
  );
}

export default App;
