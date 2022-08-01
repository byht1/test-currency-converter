import styled from 'styled-components';

export const CalcFormBox = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid var(--border-dark);
  border-radius: 10px;
  background-color: var(--topic-dark);
  box-shadow: 0px 5px 12px -4px var(--shadow);
  -webkit-box-shadow: 0px 5px 12px -4px var(--shadow);
  -moz-box-shadow: 0px 5px 12px -4px var(--shadow);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Input = styled.input`
  width: 200px;
  padding: 3px 10px;
  margin-right: 15px;
  border: none;
  border-bottom: 1px solid var(--border-dark);
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--text-dark);
  background-color: transparent;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Select = styled.select`
  border-radius: 7px;
  border-color: var(--border-dark);
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--text-dark);
  background-color: transparent;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
  &:hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: var(--text-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Span = styled.span`
  font-weight: 700;
  color: var(--logo-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;
