import React from 'react';
import { Title, TitleDecoration, WraperMain, CalcBox } from './Main.styled';
import { Container } from '../../App.styled';
import { Calc } from './Calc/Calc';
import { Banks } from './Banks/Banks';

export const Main = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>
            Курс <TitleDecoration>UAH</TitleDecoration> (гривні)
          </Title>
          <WraperMain>
            <Banks />
            <CalcBox>
              <Calc />
            </CalcBox>
          </WraperMain>
        </Container>
      </section>
    </main>
  );
};
