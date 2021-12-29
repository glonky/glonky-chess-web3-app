import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './index';

export default {
  component: Label,
  title: 'Label',
} as Meta;

const defaultTemplate: Story<LabelProps> = () => <Label htmlFor="abc" />;

export const Default = defaultTemplate.bind({});
