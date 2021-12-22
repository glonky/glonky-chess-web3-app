import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FolderIcon } from '@heroicons/react/outline';
import { SidebarLinkIcon, SidebarLinkIconProps } from './index';

export default {
  component: SidebarLinkIcon,
  title: 'Page/Sidebar/Link/Icon',
} as Meta;

const defaultTemplate: Story<SidebarLinkIconProps> = (props) => <SidebarLinkIcon {...props} />;

export const Default = defaultTemplate.bind({});

Default.args = {
  icon: <FolderIcon />,
};
