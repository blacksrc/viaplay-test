import React, { useState, useEffect, useRef } from 'react';
import { Container } from './assets/styles';
import MovieItem from '../MovieItem';
import Spinner from '../Spinner';

const getItemsPerRow = (containerWidth, itemWidth) => {
  return Math.round(containerWidth / itemWidth);
};

const MoviesList = ({ movie, fetchMoviesStartAsync, navigation }) => {
  const [selected, setSelected] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const itemPerRow = getItemsPerRow(containerRef.current.offsetWidth, itemWidth);
    switch (navigation.direction) {
      case 'right':
        if (selected < movie.movies.length - 1) {
          setSelected(selected + 1);
        }
        break;
      case 'left':
        if (selected > 0) {
          setSelected(selected - 1);
        }
        break;
      case 'down':
        if (selected <= movie.movies.length - itemPerRow - 1) {
          setSelected(selected + itemPerRow);
        }
        break;
      case 'up':
        if (selected - itemPerRow >= 0) {
          setSelected(selected - itemPerRow);
        }
        break;

      default:
        break;
    }
  }, [navigation]);

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
            selected={selected}
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
