import React from "react";
import { Link } from "react-router-dom";
import "./moviesList.scss"

const MoviesList = ({ data, count}) => {
    return (
        <div className="movies">
            <div className="movies__count">
                {
                    count === 0 ? 
                    (
                        <span>
                            No matching criteria found
                        </span>
                    ) :
                    (
                        <span>
                            {count } Founds...
                        </span>
                    )
                }
            </div>
            <div className="movies__container">
                {
                    data.map(movie => (
                       <div className="movies__item" key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                            <img src="assets/img/place-holder.png" alt={movie.title} className="movies__item-img" />
                                <div className="movies__item-detail">
                                    <span className="movies__item-title">{movie.title}</span>
                                </div>
                            </Link>
                           
                        </div>
                    ))

                    
                }

            </div>
        </div>
    )
}

export default MoviesList