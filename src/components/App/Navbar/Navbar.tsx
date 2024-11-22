import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppShell,
  Burger,
  Divider,
  Flex,
  Group,
  Image,
  NavLink,
  Paper,
  Stack,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { NavSection } from './NavSection';
import { RoutedNavLink } from './RoutedNavLink';
import classes from './Navbar.module.css';

type NavbarProps = {
  opened: boolean;
  toggle: () => void;
};

export function Navbar({ opened, toggle }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const colorScheme = useComputedColorScheme();

  return (
    <AppShell.Navbar withBorder>
      <Paper>
        <Stack>
          <Group wrap="nowrap">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              title="Close Side Panel"
            />
            <Flex
              p="lg"
              onClick={() => navigate('/dashboard', { state: { name: 'Dashboard' } })}
              className={classes.logo}
              title="Dashboard"
            >
              <Image
                src={colorScheme === 'light' ? 'src/assets/Logo.svg' : 'src/assets/Logo White.svg'}
                alt="🌌 Interstellar Logistics"
              />
            </Flex>
          </Group>
          <Stack className={classes.nav}>
            <NavSection title="Assets">
              <RoutedNavLink linkKey="facilities" toggle={toggle} />
              <RoutedNavLink linkKey="employees" toggle={toggle} />
              <RoutedNavLink linkKey="fleet" toggle={toggle} />
            </NavSection>
            <NavSection title="Product">
              <RoutedNavLink linkKey="procurement" toggle={toggle}>
                {/* <RoutedNavLink linkKey="harvesting" toggle={toggle} />
                <RoutedNavLink linkKey="processing" toggle={toggle} />
                <RoutedNavLink linkKey="manufacturing" toggle={toggle} /> */}
              </RoutedNavLink>
              <RoutedNavLink linkKey="inventory" toggle={toggle} />
              <RoutedNavLink linkKey="deliveries" toggle={toggle} />
            </NavSection>
            <NavSection title="Financial">
              <RoutedNavLink linkKey="balanceSheet" toggle={toggle} />
              <RoutedNavLink linkKey="contracts" toggle={toggle} />
            </NavSection>
            <NavSection title="Company">
              <RoutedNavLink linkKey="awards" toggle={toggle} />
              <RoutedNavLink linkKey="statistics" toggle={toggle} />
            </NavSection>
          </Stack>
        </Stack>
      </Paper>
    </AppShell.Navbar>
  );
}
