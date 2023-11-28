import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Header/navbar"
import Footer from "./components/Footer/footer"

import Home from "./pages/1.Home/Home"
import Search from "./pages/2.Search/Search"
import Watchlist from "./pages/3.Watchlist/Watchlist"
import Shows from "./pages/4.Shows/Shows"
import Movies from "./pages/5.Movies/Movies"
import Series from "./pages/6.Series/Series"

function App() {

  return (
        <div className='w-full bg-[#131520]'>
            <Router>

                <Navbar />

                <Routes>
                    
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/search" element={<Search />} />
                    <Route exact path="/watchlist" element={<Watchlist />} />
                    <Route exact path="/shows" element={<Shows />} />
                    <Route exact path="/movies" element={<Movies />} />
                    <Route exact path="/series" element={<Series />} />

                </Routes>

                <Footer />
                
            </Router>
        </div>
    )
}

export default App
