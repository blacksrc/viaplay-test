import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Detail, ImageLink } from './assets/styles';

const MovieItem = ({ image, name, year }) => {
  return (
    <Container>
      <ImageLink href={`#${name}`}>
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
};

export default MovieItem;
