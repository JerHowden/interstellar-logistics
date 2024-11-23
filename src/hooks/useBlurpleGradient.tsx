import { useComputedColorScheme } from '@mantine/core';

type Adjustment = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

export const useBlurpleGradient = (adjustment: Adjustment = 0) => {
  const colorScheme = useComputedColorScheme();
  const levels = {
    from: colorScheme === 'light' ? 3 : 2,
    to: colorScheme === 'light' ? 4 : 3,
  };
  return {
    from: `var(--mantine-color-blurple-${levels.from + adjustment})`,
    to: `var(--mantine-color-blurple-${levels.to + adjustment})`,
    deg: 180,
  };
};
