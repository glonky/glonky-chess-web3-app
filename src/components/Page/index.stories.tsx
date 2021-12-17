import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useDarkMode } from '../../hooks/use-dark-mode';
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
const lightTemplate: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useDarkMode({ isEnabled: true });
  return (
    <Page>
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
    </Page>
  );
};
export const Default = defaultTemplate.bind({});

export const Light = lightTemplate.bind({});
Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const Mobile = defaultTemplate.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
};
