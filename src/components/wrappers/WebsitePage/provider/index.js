import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { lightTheme, darkTheme } from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';

export default function WebsiteGlobalProvider({ children }) {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  const theme = value ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
