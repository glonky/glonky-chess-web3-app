import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Web3Provider } from '../../../context/';
import { Profile, ProfileProps } from './index';

export default {
  component: Profile,
  title: 'Page/Profile',
} as Meta;

const defaultTemplate: Story<ProfileProps> = () => (
  <Web3Provider>
    <Profile />
  </Web3Provider>
);

export const Default = defaultTemplate.bind({});
