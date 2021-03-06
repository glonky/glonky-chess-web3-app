import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DarkModeToggle } from './index';

export default {
  component: DarkModeToggle,
  title: 'DarkModeToggle',
} as Meta;

const defaultTemplate: Story = () => <DarkModeToggle />;

export const Default = defaultTemplate.bind({});
