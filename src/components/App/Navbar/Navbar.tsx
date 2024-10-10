import { useNavigate } from 'react-router-dom';
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
import classes from './Navbar.module.css';

type NavbarProps = {
  opened: boolean;
  toggle: () => void;
};

export function Navbar({ opened, toggle }: NavbarProps) {
  let navigate = useNavigate();
  const colorScheme = useComputedColorScheme();

  return (
    <AppShell.Navbar withBorder={false}>
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
              p="md"
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
          <Stack>
            <NavSection title="Product">
              <NavLink
                label="Facilities"
                onClick={() => navigate('/facilities', { state: { name: 'Facilities' } })}
              />
              <NavLink
                label="Employees"
                onClick={() => navigate('/employees', { state: { name: 'Employees' } })}
              />
              <NavLink
                label="Fleet"
                onClick={() => navigate('/fleet', { state: { name: 'Fleet' } })}
              />
            </NavSection>
            <NavSection title="Product">
              <NavLink
                label="Inventory"
                onClick={() => navigate('/inventory', { state: { name: 'Inventory' } })}
              />
              <NavLink
                label="Procurement"
                onClick={() => navigate('/procurement', { state: { name: 'Procurement' } })}
              >
                <NavLink
                  label="Harvesting"
                  onClick={() =>
                    navigate('/procurement/harvesting', { state: { name: 'Harvesting' } })
                  }
                />
                <NavLink
                  label="Processing"
                  onClick={() =>
                    navigate('/procurement/processing', { state: { name: 'Processing' } })
                  }
                />
                <NavLink
                  label="Manufacturing"
                  onClick={() =>
                    navigate('/procurement/manufacturing', { state: { name: 'Manufacturing' } })
                  }
                />
              </NavLink>
            </NavSection>
            <NavSection title="Financial">
              <NavLink
                label="Balance Sheet"
                onClick={() => navigate('/balance-sheet', { state: { name: 'Balance Sheet' } })}
              />
              <NavLink
                label="Contracts"
                onClick={() => navigate('/contracts', { state: { name: 'Contracts' } })}
              />
            </NavSection>
            <NavSection title="Company">
              <NavLink
                label="Awards"
                onClick={() => navigate('/awards', { state: { name: 'Awards' } })}
              />
              <NavLink
                label="Statistics"
                onClick={() => navigate('/statistics', { state: { name: 'Statistics' } })}
              />
            </NavSection>
          </Stack>
        </Stack>
      </Paper>
    </AppShell.Navbar>
  );
}
