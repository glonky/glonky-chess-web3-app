import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer } from './index';

export default {
  component: Footer,
  title: 'Page/Footer',
} as Meta;

const defaultTemplate: Story = () => <Footer />;

export const Default = defaultTemplate.bind({});
