import { useState, useEffect } from 'react';
import { GrigBox } from './Bank.styled';
import { Bank } from './Bank';
import { Error } from './../Erroe/Error';
import {
  serverWorldBank,
  serverNbu,
  serverPrivatBank,
  serverMonoBank,
} from '../../../server/api';

export const Banks = () => {
  const [worldBank, setWorldBank] = useState([]);
  const [nbu, setNbu] = useState([]);
  const [privatBank, setPrivatBank] = useState([]);
  const [monoBank, setMonoBank] = useState([]);

  useEffect(() => {
    serverDataWorldBank();
    serverDataPrivatBank();
    serverDataNbu();
    serverDataMonoBank();
  }, []);

  async function serverDataWorldBank() {
    try {
      const data = await serverWorldBank();
      setWorldBank(data.reverse());
    } catch (error) {
      console.error(error);
    }
  }
  async function serverDataNbu() {
    try {
      const data = await serverNbu();
      setNbu(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function serverDataPrivatBank() {
    try {
      const data = await serverPrivatBank();
      setPrivatBank(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function serverDataMonoBank() {
    try {
      const data = await serverMonoBank();
      setMonoBank(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <GrigBox>
      {worldBank.length === 0 ? (
        <Error bankName={'МВФ'} />
      ) : (
        <Bank data={worldBank} isDate={true} nameBank={'world'} />
      )}
      {nbu.length === 0 ? (
        <Error bankName={'НБУ'} />
      ) : (
        <Bank data={nbu} isDate={true} nameBank={'nbu'} />
      )}
      {privatBank.length === 0 ? (
        <Error bankName={'ПриватБанк'} />
      ) : (
        <Bank data={privatBank} isDate={false} nameBank={'privat'} />
      )}
      {monoBank.length === 0 ? (
        <Error bankName={'monobank'} />
      ) : (
        <Bank data={monoBank} isDate={false} nameBank={'mono'} />
      )}
    </GrigBox>
  );
};
