import { useLocation } from 'react-router-dom';
import { AppShell, Burger, Chip, Group, Text } from '@mantine/core';
import classes from './App.module.css';

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export function Header({ opened, toggle }: HeaderProps) {
  const location = useLocation();

  const name = location.state?.name ?? 'Page Title';

  return (
    <AppShell.Header withBorder={false} className={classes.background} h={60}>
      <Group h="100%" px="md" gap="md" justify="space-between">
        <Group h="100%" gap="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>{name}</Text>
        </Group>
        <Chip defaultChecked variant="filled" size="xl">
          $$1,000,000
        </Chip>
      </Group>
    </AppShell.Header>
  );
}
