import React from 'react';
import { BanlErr, TextErr } from './Error.styled';

export const Error = ({ bankName }) => {
  return (
    <TextErr>
      Вибачте, але сервер <BanlErr>{bankName}</BanlErr> на даний момент не
      працює. Спробуйте перезавантажити сторінку через 5 хвилин.
    </TextErr>
  );
};
