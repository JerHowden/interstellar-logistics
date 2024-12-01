import '@mantine/core/styles.css';
import './styles/global.module.css';

import { Providers } from './providers';
import { Router } from './Router';

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}
