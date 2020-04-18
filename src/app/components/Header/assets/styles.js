import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.variables.spacing * 2}px 0px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-width: 150px;
`;

const LanguageContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Language = styled.li`
  a {
    border-radius: 50%;
    padding: ${({ theme }) => theme.variables.spacing}px;
    color: ${({ theme }) => theme.colors.grey100};

    &.active {
      background-color: ${({ theme }) => theme.colors.grey100};
      color: ${({ theme }) => theme.colors.grey500};
    }
  }
`;

export { Container, Logo, LanguageContainer, Language };
