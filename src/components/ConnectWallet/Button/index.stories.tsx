import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu } from '@headlessui/react';
import { ConnectWalletButton } from './index';

export default {
  component: ConnectWalletButton,
  title: 'ConnectWalletButton',
} as Meta;

const connectedWalletTemplate: Story = (args) => {
  return (
    <Menu>
      <ConnectWalletButton {...args} />
    </Menu>
  );
};

const disconnectedWalletTemplate: Story = (args) => {
  return (
    <Menu>
      <ConnectWalletButton {...args} />
    </Menu>
  );
};

export const ConnectedWallet = connectedWalletTemplate.bind({});
export const DisconnectedWallet = disconnectedWalletTemplate.bind({});
