import { ReactNode } from 'react';
import { Stack, Text } from '@mantine/core';
import { useBlurpleGradient } from '@/hooks';

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  const gradient = useBlurpleGradient(-2);
  return (
    <Stack gap={0} mx="lg">
      <Text size="sm" variant="gradient" fw={700} tt="uppercase" py="xs" gradient={gradient}>
        {title}
      </Text>
      {children}
    </Stack>
  );
}
