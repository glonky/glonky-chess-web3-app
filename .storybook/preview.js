
import React from 'react';
import { addDecorator } from '@storybook/react';
import Layout from './Layout';

const LIGHT_BACKGROUND_HEX = '#f9fafb';
const DARK_BACKGROUND_HEX = '#374151';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: LIGHT_BACKGROUND_HEX,
      },
      {
        name: 'dark',
        value: DARK_BACKGROUND_HEX,
      },
    ],
  }
}
