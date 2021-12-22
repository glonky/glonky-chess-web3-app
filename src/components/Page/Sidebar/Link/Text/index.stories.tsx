import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SidebarLinkText, SidebarLinkTextProps } from './index';

export default {
  component: SidebarLinkText,
  title: 'Page/Sidebar/Link/Text',
} as Meta;

const defaultTemplate: Story<SidebarLinkTextProps> = (props) => <SidebarLinkText {...props}>Text</SidebarLinkText>;

export const Default = defaultTemplate.bind({});

Default.args = {};
