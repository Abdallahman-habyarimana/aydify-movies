
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/moviesDetail/MovieDetail'
import MoviesList from './components/moviesList/MoviesList'
import Home from './pages/home/Home.page'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/movies" element={ <MoviesList />} />
      <Route path="/movies/:id" element={ <MovieDetail />} />
      
    </Routes>
  )
}

export default App