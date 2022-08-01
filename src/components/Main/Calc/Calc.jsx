import React, { useState, useEffect } from 'react';
import { cacl } from '../../../server/api';
import { CalcFormBox, Input, Div, Text, Span, Select } from './Calc.styled';

const valueName = ['UAH', 'USD', 'EUR'];

export const Calc = () => {
  const [valueCalcOne, setValueCalcOne] = useState('1');
  const [valueCalcTwo, setValueCalcTwo] = useState('');
  const [currencyTo, setCurrencyTo] = useState('UAH');
  const [currencyResult, setCurrencyResult] = useState('USD');
  const [course, setСourse] = useState(0);

  useEffect(() => {
    dataServer(currencyTo, currencyResult);
    calcDataOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencyTo, currencyResult]);

  useEffect(() => {
    calcDataOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course]);

  async function dataServer(to = currencyTo, result = currencyResult) {
    const data = await cacl(to, result);
    const course = Number((1 / data.result).toFixed(5));

    setСourse(course);
  }

  function calcDataOne(value = valueCalcOne) {
    const total = Number(value) / course;
    setValueCalcTwo(total.toFixed(5));
  }

  function calcDataTwo(value = valueCalcTwo) {
    const total = Number(value) * course;
    setValueCalcOne(total.toFixed(5));
  }

  const onChangeValueCalcOne = event => {
    const newValue = event.target.value;
    setValueCalcOne(newValue);
    calcDataOne(newValue);
  };

  const onChangeValueCalcTwo = event => {
    const newValue = event.target.value;
    setValueCalcTwo(newValue);
    calcDataTwo(newValue);
  };

  const onChangeCurrencyTo = event => {
    const newValue = event.target.value;
    setCurrencyTo(newValue);
  };

  const onChangeCurrencyResult = event => {
    const newValue = event.target.value;
    setCurrencyResult(newValue);
  };

  return (
    <CalcFormBox>
      <form>
        <div>
          <Input
            type="number"
            value={valueCalcOne}
            onChange={onChangeValueCalcOne}
          />
          <Select onChange={onChangeCurrencyTo} value={currencyTo}>
            {valueName.map(x => {
              return (
                <option key={x + '1'} value={x}>
                  {x}
                </option>
              );
            })}
          </Select>
        </div>
        <Div>
          <Input
            value={valueCalcTwo}
            type="number"
            onChange={onChangeValueCalcTwo}
          />
          <Select onChange={onChangeCurrencyResult} value={currencyResult}>
            {valueName.map(x => {
              return (
                <option key={x + '2'} value={x}>
                  {x}
                </option>
              );
            })}
          </Select>
        </Div>
        {course !== 0 && (
          <Text>
            <Span>За курсом: </Span>
            {course}
          </Text>
        )}
      </form>
    </CalcFormBox>
  );
};
