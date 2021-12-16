import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from './index';

export default {
  component: Header,
  title: 'Page/Header',
} as Meta;

const defaultTemplate: Story = () => <Header />;

export const Default = defaultTemplate.bind({});
