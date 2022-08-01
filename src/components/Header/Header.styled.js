import styled from 'styled-components';
import { BsEmojiSunglassesFill } from 'react-icons/bs';

export const HeaderBox = styled.header`
  position: relative;
  padding: 20px 15px;
  border-bottom: 1px solid var(--border-dark);
  background-color: var(--header-color);
  box-shadow: 0px 5px 12px -4px var(--shadow);
  -webkit-box-shadow: 0px 5px 12px -4px var(--shadow);
  -moz-box-shadow: 0px 5px 12px -4px var(--shadow);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Logo = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 26px;
  text-align: center;
  color: var(--logo-dark);
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const BoxButton = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

export const Button = styled.button`
  position: relative;
  margin-left: auto;
  width: 50px;
  height: 25px;
  border: 2px solid var(--togle);
  border-radius: 15px;
  background-color: transparent;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear;
`;

export const Сircle = styled(BsEmojiSunglassesFill)`
  position: absolute;
  top: 50%;
  left: 1px;
  width: 50%;
  height: 90%;
  transform: ${prop =>
    prop.cheked ? 'translate(90%, -50%)' : 'translate(0, -50%)'};
  border-radius: 50%;
  fill: var(--togle);
  transition: transform 250ms linear;
  transition: color 250ms linear, background-color 250ms linear,
    border 250ms linear, transform 250ms linear;
`;
