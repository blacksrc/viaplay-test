import React, { useEffect } from 'react';
import { Container } from './assets/styles';
import MovieItem from '../MovieItem';
import Spinner from '../Spinner';

const MoviesList = ({ movie, fetchMoviesStartAsync }) => {
  useEffect(() => {
    fetchMoviesStartAsync();
  }, [fetchMoviesStartAsync]);

  if (movie.isFetching) {
    return <Spinner />;
  }

  return (
    <Container>
      {movie.movies.map((movieItem) => (
        <MovieItem
          key={movieItem.system.guid}
          image={movieItem.content.images.landscape.url}
          name={movieItem.content.series.title}
          year={movieItem.content.production.year}
        />
      ))}
    </Container>
  );
};

export default MoviesList;
