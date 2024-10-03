import { createTheme, MantineColorsTuple } from '@mantine/core';

const blurple: MantineColorsTuple = [
  '#efe9ff',
  '#dacfff',
  '#b09bff',
  '#8464ff',
  '#6036fe',
  '#4919fe',
  '#3c09ff',
  '#2e00e4',
  '#2600cc',
  '#1c00b4',
];

export const theme = createTheme({
  colors: {
    blurple,
  },
  primaryColor: 'blurple',
  defaultRadius: 'md',
});
