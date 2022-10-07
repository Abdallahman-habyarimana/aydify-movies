
import React, { useState } from 'react'
import Category from '../../components/category/Category';
import Header from '../../components/header/Header';
import MoviesList from '../../components/moviesList/MoviesList';
import { httpGetCategory } from '../../services/httpCategory';
import { httpGetMovies } from '../../services/httpMovies';
import "./home.scss"

const Home = () => {
    const [movies, setMovies] = useState(httpGetMovies());
    const [category, setCategory] = useState(httpGetCategory());
    
  return (
    <div className="home__container">
        <Header />
        <Category category={category} />
        <MoviesList data={movies} />
    </div>
  )
}

export default Home