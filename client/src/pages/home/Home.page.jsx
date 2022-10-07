
import React, { useState, useEffect } from 'react'
import Category from '../../components/category/Category';
import Header from '../../components/header/Header';
import MoviesList from '../../components/moviesList/MoviesList';
import { httpGetCategory } from '../../services/httpCategory';
import { httpGetMovies } from '../../services/httpMovies';
import "./home.scss"

const Home = () => {
    const [movies, setMovies] = useState(httpGetMovies(""));
    const [category, setCategory] = useState(httpGetCategory());
    const [query, setQuery] = useState("");
    const [count, setCount] = useState(movies.length);



    console.log(category)

    const handleSearchQuery = (querySearch) => {
      const allMovies = httpGetMovies(querySearch)

      setMovies(allMovies)
      setCount(allMovies.length)
    }

    const handleQuery = (queryParams) => {
      setQuery(queryParams);

      handleSearchQuery(query)
    }

    console.log(movies)

    
  return (
    <div className="home__container">
        <Header />
        <Category category={category} onCategory={handleQuery} />
        <MoviesList data={movies} query={query} count={count} />
    </div>
  )
}

export default Home