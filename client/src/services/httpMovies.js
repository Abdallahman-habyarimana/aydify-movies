import { movies } from "./movies"


export const httpGetMovies = () => {
    return movies;
}

export const httpGetMovie = (id) => {
    return movies.filter(movie => movie.id === id)
}