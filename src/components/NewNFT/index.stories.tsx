import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NewNFT } from './index';

export default {
  component: NewNFT,
  title: 'NewNFT',
} as Meta;

const defaultTemplate: Story = () => <NewNFT />;

export const Default = defaultTemplate.bind({});
