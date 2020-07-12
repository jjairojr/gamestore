import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <AppProvider>
        <GlobalStyle />
        <Home />
      </AppProvider>
    </ToastProvider>
  );
};

export default App;
