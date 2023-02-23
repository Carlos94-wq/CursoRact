import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { pourpleTheme } from './purpleTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ pourpleTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
