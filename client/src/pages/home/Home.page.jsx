
import React, { useState } from 'react'
import { httpGetMovies } from '../../services/httpMovies';

const MoviesList = (props) => {
    const { data } = props
    return (
        <>
            {
                data.map(movie => (
                    <span>{movie.title}</span>
            ))
        }
        </>
    )
}

const Home = () => {
    const [movies, setMovies] = useState(httpGetMovies());
  return (
    <>
        <MoviesList data={movies} />
    </>
  )
}

export default Home