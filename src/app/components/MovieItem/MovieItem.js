import React from 'react';
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

export default MovieItem;
