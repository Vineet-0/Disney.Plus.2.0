import React,{useState,useEffect} from 'react'
import SearchBar from '../../containers/SearchBar';
import Card from '../../components/Cards/Card'
import InfiniteScroll from "react-infinite-scroll-component";


import GlobalApi from '../../Services/GlobalApi';


var currentPage = 1;

const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onLoadMore=()=>{
        currentPage = currentPage + 1;
        GlobalApi.getPopularMoviesPage(currentPage).then(resp=>{
            setMovies([...movies, ...resp.data.results]);
        })
    }

    useEffect(() => {
        GlobalApi.getPopularMoviesPage(1).then(resp => {
            setMovies(resp.data.results);
        });
    }, []);
  
    return (
        <div className='lg:mt-20 w-full'>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSearchResults={setSearchResults}
            />
            
            <div className="z-3 mx-auto max-w-2xl px-6 py-6 sm:py-16 sm:mt-40 md:px-2 lg:py-0 lg:max-w-7xl lg:px-8">
                {!searchTerm ? (
                    <InfiniteScroll
                        dataLength={movies?.length}
                        next={onLoadMore}
                        hasMore={true}
                        scrollThreshold="500px"
                    >
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <Card cardData={movies} />
                        </div>
                    </InfiniteScroll>
                    ) : (
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <Card cardData={searchResults} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Search