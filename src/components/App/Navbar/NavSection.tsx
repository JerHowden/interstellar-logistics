import { ReactNode } from 'react';
import { Stack, Text } from '@mantine/core';
import { useBlurpleGradient } from '@/hooks';

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Stack gap={0} mx="lg">
      <Text size="sm" fw={700} tt="uppercase" py="xs">
        {title}
      </Text>
      {children}
    </Stack>
  );
}
