import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FolderIcon } from '@heroicons/react/outline';
import { SidebarLink, SidebarLinkProps } from './index';

export default {
  component: SidebarLink,
  title: 'Page/Sidebar/Link',
} as Meta;

const defaultTemplate: Story<SidebarLinkProps> = (props) => (
  <SidebarLink {...props}>
    <SidebarLink.Icon icon={<FolderIcon />} />
    <SidebarLink.Text>Text</SidebarLink.Text>
  </SidebarLink>
);

export const Default = defaultTemplate.bind({});

Default.args = {
  href: '/#',
};
