import styled from 'styled-components';
import { above } from '../../theme/breakpoints';

const MainWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;

  ${above.xs} {
    max-width: 95%;
  }

  ${above.lg} {
    max-width: 98%;
  }
`;

export { MainWrapper };
