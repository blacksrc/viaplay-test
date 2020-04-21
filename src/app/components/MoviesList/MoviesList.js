import React, { useState, useEffect, useRef } from 'react';
import { getItemsPerRow, getNextSelectedIndex } from '../../utils';
import { Container } from './assets/styles';
import MovieItem from '../MovieItem';
import Spinner from '../Spinner';

const MoviesList = ({ movie, fetchMoviesStartAsync, navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const itemsPerRow = getItemsPerRow(containerRef.current.offsetWidth, itemWidth);
    setSelectedIndex((perviousValue) =>
      getNextSelectedIndex(navigation.direction, movie.movies.length, itemsPerRow, perviousValue)
    );
  }, [navigation, movie.movies, itemWidth]);

  useEffect(() => {
    fetchMoviesStartAsync();
  }, [fetchMoviesStartAsync]);

  if (movie.isFetching) {
    return <Spinner />;
  }

  return (
    <Container ref={containerRef}>
      {movie.movies.map((movieItem, key) => {
        return (
          <MovieItem
            i={key}
            selectedIndex={selectedIndex}
            key={movieItem.system.guid}
            image={movieItem.content.images.landscape.url}
            name={movieItem.content.series.title}
            year={movieItem.content.production.year}
            setMovieWidth={(width) => setItemWidth(width)}
          />
        );
      })}
    </Container>
  );
};

export default MoviesList;
