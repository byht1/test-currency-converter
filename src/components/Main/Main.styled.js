import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--text-dark);
`;

export const TitleDecoration = styled.span`
  font-family: 'Orbitron', sans-serif;
`;

export const WraperMain = styled.div`
  @media screen and (min-width: 1000px) {
    margin: 30px 0 0 0;
    display: grid;
    grid-template-columns: 550px 1fr;
    grid-auro-rows: 1fr;
    align-items: center;
    gap: 50px;
  }
`;

export const GrigBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 20px;
  align-items: end;
`;

export const CalcBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
