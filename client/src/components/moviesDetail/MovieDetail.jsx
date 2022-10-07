import { useParams } from "react-router-dom"
import { httpGetMovie } from "../../services/httpMovies";

const MovieDetail = () => {
    const { id } = useParams();
    const movie = httpGetMovie(+id);
    console.log(movie[0].title)
    return(
        <>
            <span>{movie[0].title}</span>
        </>
    )
}

export default MovieDetail