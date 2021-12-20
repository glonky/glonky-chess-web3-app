import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { Web3Provider } from '../../context';
import { Page } from './index';

export default {
  component: Page,
  title: 'Page',
} as Meta;

const defaultTemplate: Story = () => (
  <Web3Provider>
    <Page>
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
    </Page>
  </Web3Provider>
);
const lightTemplate: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useDarkMode({ isEnabled: true });
  return (
    <Web3Provider>
      <Page>
        <div className="py-4">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
      </Page>
    </Web3Provider>
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
