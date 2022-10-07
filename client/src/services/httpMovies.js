import { movies } from "./movies"


export const httpGetMovies = (query)=> {
    
    if (query === "") return movies;

    return movies.filter(movie =>  movie.category.includes(query) )
}

export const httpGetMovie = (id) => {
    return movies.filter(movie => movie.id === id)
}