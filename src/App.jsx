import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Header/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"

import Home from "./pages/1.Home/Home.jsx"
import Search from "./pages/2.Search/Search.jsx"
import Watchlist from "./pages/3.Watchlist/Watchlist.jsx"
import Shows from "./pages/4.Shows/Shows.jsx"
import Movies from "./pages/5.Movies/Movies.jsx"
import Series from "./pages/6.Series/Series.jsx"

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
