import { Button, Container, Group, Paper, Title } from '@mantine/core';
import { generateCelestialSystem } from '@/lib/data/locations/functions/generateSystems';
import { Map } from '@/modules/map';

export function DashboardPage() {
  return (
    <Container size="xl">
      <Paper shadow="sm" p="md">
        <Title order={2} mb="sm">
          Galaxy Map
        </Title>
        <Group>
          <Button.Group>
            <Button
              onClick={() => {
                const system = generateCelestialSystem('solar-system');
                console.log(system);
              }}
            >
              Generate Solar System
            </Button>
            <Button>Generate Nebula</Button>
            <Button>Generate Black Hole</Button>
            <Button>Generate Rogue Planet</Button>
          </Button.Group>
        </Group>
        <div>
          <Map />
        </div>
      </Paper>
    </Container>
  );
}
