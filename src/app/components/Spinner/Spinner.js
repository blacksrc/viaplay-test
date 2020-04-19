import React from 'react';
import { Container, Icon, Text } from './assets/styles';

const Spinner = ({ text = 'Loading...' }) => (
  <Container>
    <Icon />
    <Text>{text}</Text>
  </Container>
);
export default Spinner;
