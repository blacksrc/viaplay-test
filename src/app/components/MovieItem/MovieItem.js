import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Detail, ImageLink } from './assets/styles';

const MovieItem = ({ image, name, year, i, selected, setMovieWidth }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    setMovieWidth(itemRef.current.offsetWidth);
  }, []);

  return (
    <Container ref={itemRef}>
      <ImageLink href={`#${name}`} className={i === selected ? 'selected' : ''}>
        <Detail>
          <h2>{name}</h2>
          <span>({year})</span>
        </Detail>
        <Image src={image} />
      </ImageLink>
    </Container>
  );
};

MovieItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  year: PropTypes.number,
  selected: PropTypes.number,
};

export default MovieItem;
