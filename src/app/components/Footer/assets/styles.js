import styled from 'styled-components';
import { above } from '../../../theme/breakpoints';

const Container = styled.div`
  min-height: ${({ theme }) => theme.variables.spacing * 2}px;
  padding: ${({ theme }) => theme.variables.spacing * 2}px 0px;
  color: ${({ theme }) => theme.colors.grey200};
  display: flex;
  justify-content: center;
  align-items: center;

  ${above.sm} {
    justify-content: flex-start;
  }
`;

export { Container };
