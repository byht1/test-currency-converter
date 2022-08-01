import styled from 'styled-components';

export const Box = styled.div`
  min-height: 100vh;
  background-color: var(--topic-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
`;
