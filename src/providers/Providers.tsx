import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from './store';
import { theme } from './theme';

type ProvidersProps = {
  children: ReactNode;
};
export function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </Provider>
  );
}
