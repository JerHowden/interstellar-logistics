import { ReactNode } from 'react';
import { Stack, Text } from '@mantine/core';
import { useBlurpleGradient } from '@/hooks';

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  const gradient = useBlurpleGradient();
  return (
    <Stack gap="xs">
      <Text size="xs" fw={700} tt="uppercase" variant="gradient" gradient={gradient}>
        {title}
      </Text>
      {children}
    </Stack>
  );
}
