import styled from 'styled-components';

const Container = styled.li`
  overflow: hidden;
  position: relative;

  a:focus,
  a.selected,
  &:hover {
    div {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Detail = styled.div`
  transition: all ${({ theme }) => theme.variables.transitionSpeed}ms;
  color: ${({ theme }) => theme.colors.grey100};
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
`;

export { Container, Image, Detail };
