import React from 'react';
import { Table, Td, Th, IconMono, IconNbu } from './Bank.styled';
import { ReactComponent as IconMvf } from '../../../icon/icon-mvf.svg';

const img = {
  privat: (
    <img
      src="https://api.privatbank.ua/img/logo-api.svg"
      alt="Логотип ПриватБанка"
    />
  ),
  mono: <IconMono />,
  world: <IconMvf />,
  nbu: <IconNbu />,
};

export const Bank = ({ data, isDate, nameBank }) => {
  return (
    <div>
      {nameBank && img[`${nameBank}`]}
      <Table>
        <tbody>
          <tr>
            <Td></Td>
            <Th>{isDate ? 'Офіційний курс' : 'Продать'}</Th>
            <Th>{isDate ? 'На дату' : 'Купить'}</Th>
          </tr>
        </tbody>
        {data.map(({ name, buy, sale, date }) => {
          return (
            <tbody key={buy + 'nby'}>
              <tr>
                <Td>{name}</Td>
                <Td>{buy}</Td>
                <Td>{sale ? sale : date}</Td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};
