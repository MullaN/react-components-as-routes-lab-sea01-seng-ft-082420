import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return(
            <div key={movie.title}>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              <ul>
                {movie.genres.map(genre => <li key={`${movie.title}-${movie.genre}`}>{genre}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
