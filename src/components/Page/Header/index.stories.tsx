import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Web3Provider } from '../../../context/';
import { Header } from './index';

export default {
  component: Header,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  title: 'Page/Header',
} as Meta;

const defaultTemplate: Story = () => (
  <Web3Provider>
    <Header />
  </Web3Provider>
);

export const Default = defaultTemplate.bind({});
