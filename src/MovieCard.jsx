import React from "react";

// Functional Component - MovieCard
// Used "object the structuring of the props" to pass the values
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type} }) => {
    return(
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
            <div>
                <span>{Type}--{imdbID}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;

