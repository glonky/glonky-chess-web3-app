import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Profile, ProfileProps } from './index';

export default {
  component: Profile,
  title: 'Page/Profile',
} as Meta;

const defaultTemplate: Story<ProfileProps> = () => <Profile />;

export const Default = defaultTemplate.bind({});
