import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { getItemsPerRow, getNextSelectedIndex } from '../../utils';
import { Container } from './assets/styles';
import MovieItem from '../MovieItem';
import Spinner from '../Spinner';

const MoviesList = ({ movie, fetchMoviesStartAsync, navigation, setDirection }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);
  const history = useHistory();

  // To fix browser back button issue
  useEffect(() => {
    setDirection('');
  }, [setDirection]);

  useEffect(() => {
    // Calculate each how many items exists in each row to handle up and down arrow
    const itemsPerRow = getItemsPerRow(containerRef.current?.offsetWidth, itemWidth);
    setSelectedIndex((perviousIndex) => {
      const newIndex = getNextSelectedIndex(
        navigation.direction,
        movie.movies.length,
        itemsPerRow,
        perviousIndex
      );

      // TODO: Redirection need to be implemented here using react router.
      if (navigation.direction === 'enter') {
        history.push(`/${movie.movies[newIndex].system.guid}`);
      }

      return newIndex;
    });
  }, [navigation, movie.movies, itemWidth, history]);

  useEffect(() => {
    if (movie.movies.length === 0) {
      fetchMoviesStartAsync();
    }
  }, [fetchMoviesStartAsync, movie.movies]);

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
            id={movieItem.system.guid}
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
