import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    const imdbUrl = `https://www.imdb.com/title/${imdbID}/`;
  return (
    <a href={imdbUrl} target="_blank" rel="noopener noreferrer" className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </a>
  );
}

export default MovieCard;