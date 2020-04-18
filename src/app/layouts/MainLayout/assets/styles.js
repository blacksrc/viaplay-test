import styled from 'styled-components';

const Container = styled.main`
  padding: ${({ theme }) => theme.variables.spacing * 2}px 0px;
  flex: 1;
`;

export { Container };
