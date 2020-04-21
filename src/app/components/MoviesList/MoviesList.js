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
    // Calculate each how many items exists in each row to handle up and down arrow
    const itemsPerRow = getItemsPerRow(containerRef.current.offsetWidth, itemWidth);
    setSelectedIndex((perviousIndex) => {
      const newIndex = getNextSelectedIndex(
        navigation.direction,
        movie.movies.length,
        itemsPerRow,
        perviousIndex
      );

      // TODO: Redirection need to be implemented here using react router.
      if (navigation.direction === 'enter') {
        console.log('Route to movie with this guid: ' + movie.movies[newIndex].system.guid);
      }

      // TODO: This will be implemented on view movie page to go back to home page.
      if (navigation.direction === 'exit') {
        console.log('Back to all movies');
      }

      return newIndex;
    });
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
