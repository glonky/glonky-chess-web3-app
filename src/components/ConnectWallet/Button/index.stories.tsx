import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu } from '@headlessui/react';
import { Web3Provider } from '../../../context/';
import { ConnectWalletButton } from './index';

export default {
  component: ConnectWalletButton,
  title: 'ConnectWalletButton',
} as Meta;

const connectedWalletTemplate: Story = (args) => {
  return (
    <Web3Provider>
      <Menu>
        <ConnectWalletButton {...args} />
      </Menu>
    </Web3Provider>
  );
};

const disconnectedWalletTemplate: Story = (args) => {
  return (
    <Web3Provider>
      <Menu>
        <ConnectWalletButton {...args} />
      </Menu>
    </Web3Provider>
  );
};

export const ConnectedWallet = connectedWalletTemplate.bind({});
export const DisconnectedWallet = disconnectedWalletTemplate.bind({});
