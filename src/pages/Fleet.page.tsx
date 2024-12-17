import { useSelector } from 'react-redux';
import { Badge, Button, Card, Container, Grid, Group, Text, Title } from '@mantine/core';
import { getFleet } from '@/modules/assets/fleet/selectors';
import { getBalance } from '@/modules/infrastructure/balance';
import { SHIPS_MAP } from '../lib/data/fleet/constants';
import { Ship, ShipOwned } from '../lib/data/fleet/types';

export function FleetPage() {
  const ownedShips = useSelector(getFleet);
  const balance = useSelector(getBalance);

  const handlePurchase = (shipId: string) => {
    // Dispatch action to purchase ship
    // dispatch(purchaseShip(shipId));
  };

  const renderShipCard = (ship: Ship, owned: boolean = false, ownedShip?: ShipOwned) => (
    <Card key={ship.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{ship.name}</Text>
        <Badge color={owned ? 'green' : 'blue'} variant="light">
          {owned ? 'Owned' : 'Available'}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Company: {ship.company}
        <br />
        Level: {ship.level}
        <br />
        Speed: {ship.speed} ly/s
        <br />
        Capacity: {ship.capacity} t<br />
      </Text>

      {owned && ownedShip ? (
        <Group justify="space-between" mt="md">
          <Text size="sm">Fuel: {ownedShip.fuelPercentage}%</Text>
          <Text size="sm">Cargo: {ownedShip.cargo.length} items</Text>
        </Group>
      ) : (
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => handlePurchase(ship.id)}
        >
          Purchase for ${ship.cost}
        </Button>
      )}
    </Card>
  );
  return (
    <Container size="xl">
      <Title order={1} mb="md">
        Fleet Management
      </Title>
      <Text mb="xl">Current Balance: ${balance}</Text>

      <Title order={2} mb="md">
        Your Ships
      </Title>
      <Grid>
        {ownedShips.map((ownedShip) => (
          <Grid.Col key={ownedShip.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            {renderShipCard(ownedShip.ship, true, ownedShip)}
          </Grid.Col>
        ))}
      </Grid>

      <Title order={2} mt="xl" mb="md">
        Available Ships
      </Title>
      <Grid>
        {Object.values(SHIPS_MAP)
          .filter((ship) => !ownedShips.some((owned) => owned.ship.id === ship.id))
          .map((ship) => (
            <Grid.Col key={ship.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              {renderShipCard(ship)}
            </Grid.Col>
          ))}
      </Grid>
    </Container>
  );
}
