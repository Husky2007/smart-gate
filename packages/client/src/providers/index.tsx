import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../i18n';
import { AuthProvider, AxiosProvider } from './api';
import UserProvider from './api/CurrentUserProvider';
import SnackbarProvider from './SnackbarProvider';
import StylesProvider from './StylesProvider';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <UserProvider>
    <AxiosProvider>
      <AuthProvider>
        <StylesProvider>
          <I18nextProvider i18n={i18n}>
            <SnackbarProvider>{children}</SnackbarProvider>
          </I18nextProvider>
        </StylesProvider>
      </AuthProvider>
    </AxiosProvider>
  </UserProvider>
);

export default Providers;
