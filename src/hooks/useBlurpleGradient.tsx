import { useComputedColorScheme } from '@mantine/core';

export const useBlurpleGradient = () => {
  const colorScheme = useComputedColorScheme();
  return colorScheme === 'light'
    ? {
        from: 'var(--mantine-color-blurple-3)',
        to: 'var(--mantine-color-blurple-4)',
        deg: 180,
      }
    : {
        from: 'var(--mantine-color-blurple-2)',
        to: 'var(--mantine-color-blurple-3)',
        deg: 180,
      };
};
