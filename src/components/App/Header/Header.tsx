import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Anchor,
  AppShell,
  Breadcrumbs,
  Burger,
  Chip,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { NAV_LINK_KEY, NAV_LINK_MAP } from '../Navbar/constants';
import { PAGE_SUBTITLE } from './constants';
import appClasses from '../App.module.css';
import headerClasses from './Header.module.css';

type HeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export function Header({ opened, toggle }: HeaderProps) {
  const location = useLocation();

  const name = location.state?.name ?? 'Page Title';

  const breadcrumbs = useMemo(() => {
    const pathKey = Object.keys(NAV_LINK_MAP).find(
      (key) => NAV_LINK_MAP[key as NAV_LINK_KEY].to === location.pathname
    );
    if (!pathKey) return null;
    const subtitle = PAGE_SUBTITLE[pathKey as NAV_LINK_KEY];

    let crumbs = [
      <Anchor
        key={subtitle[0]}
        size="xs"
        c="var(--mantine-color-body)"
        fw={500}
        underline="never"
        className={headerClasses.crumb}
      >
        {subtitle[0]}
      </Anchor>,
    ];
    return crumbs.concat(
      subtitle.slice(1).map((crumb) => (
        <Anchor key={crumb} size="xs" c="dimmed" fw={500} className={headerClasses.crumb}>
          {crumb}
        </Anchor>
      ))
    );
  }, [location.pathname]);

  return (
    <AppShell.Header withBorder={false} className={appClasses.background} h={60}>
      <Group h="100%" px="md" pt="md" gap="md" justify="space-between" align="flex-start">
        <Group h="100%" gap="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Stack gap={0}>
            <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
            <Title order={3} className={headerClasses.title}>
              {name}
            </Title>
          </Stack>
        </Group>
        <Chip variant="filled" size="xl">
          $1,000,000
        </Chip>
      </Group>
    </AppShell.Header>
  );
}
