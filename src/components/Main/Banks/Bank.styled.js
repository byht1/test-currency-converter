import styled from 'styled-components';
import { ReactComponent as IconMonoBanc } from '../../../icon/icon-mono.svg';
import { ReactComponent as IconNbuBank } from '../../../icon/NBU.svg';

export const IconNbu = styled(IconNbuBank)`
  color: var(--logo-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const GrigBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auro-rows: 1fr;
  gap: 20px;
  align-items: end;
`;

export const IconMono = styled(IconMonoBanc)`
  color: var(--logo-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border: 2px solid var(--border-dark);
  border-collapse: collapse;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 5px;
  background: var(--background);
  border: 2px solid var(--border-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Td = styled.td`
  padding: 20px;
  font-size: 18px;
  text-align: center;
  color: var(--text-dark);
  border: 2px solid var(--border-dark);
  padding: 5px;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Span = styled.span`
  position: relative;
  /* text-decoration: underline; */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
`;
