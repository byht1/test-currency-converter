import React, { useState, useLayoutEffect } from 'react';
import { HeaderBox, Logo, Button, Сircle, BoxButton } from './Header.styled';

export const Header = () => {
  const [cheked, setCheked] = useState(true);
  const [theme, setTheme] = useState('wihte');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('dark-theme', theme);
  }, [theme]);

  function themeTogle() {
    if (theme === 'dark') {
      setTheme('wihte');
    }
    if (theme === 'wihte') {
      setTheme('dark');
    }

    setCheked(prev => !prev);
  }

  return (
    <HeaderBox>
      <Logo>CurrencyCalculator</Logo>
      <BoxButton>
        <Button onClick={themeTogle}>
          <Сircle cheked={cheked} />
        </Button>
      </BoxButton>
    </HeaderBox>
  );
};
