import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  return (
    <Link to={`/Movie/${movie.id}`}></Link>
  );
};

export default MovieCard;
