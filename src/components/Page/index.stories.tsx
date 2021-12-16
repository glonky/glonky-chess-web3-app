import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Page } from './index';

export default {
  component: Page,
  title: 'Page',
} as Meta;

const defaultTemplate: Story = () => (
  <Page>
    <div className="py-4">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
    </div>
  </Page>
);

export const Default = defaultTemplate.bind({});
