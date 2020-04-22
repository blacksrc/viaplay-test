import styled from 'styled-components';
import { above } from '../../../theme/breakpoints';

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  margin: 0 auto;
  display: block;

  ${above.sm} {
    width: 50%;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

export { Container, Image, Title };
