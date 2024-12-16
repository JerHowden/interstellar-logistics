import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from './store';
import { theme } from './theme';

type ProvidersProps = {
  children: ReactNode;
};
export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ReduxProvider>
  );
}
