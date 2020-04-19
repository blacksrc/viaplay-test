import styled from 'styled-components';

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: ${({ theme }) => theme.variables.spacing * 2}px;
`;

export { Container };
