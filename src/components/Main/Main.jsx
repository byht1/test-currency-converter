import React from 'react';
import {
  Title,
  TitleDecoration,
  WraperMain,
  CalcBox,
  Section,
} from './Main.styled';
import { Container } from '../../App.styled';
import { Calc } from './Calc/Calc';
import { Banks } from './Banks/Banks';

export const Main = () => {
  return (
    <main>
      <Section>
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
      </Section>
    </main>
  );
};
