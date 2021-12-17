import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { SidebarProvider, SidebarProviderProps } from '../context';
import { SidebarMobile } from './index';

export default {
  component: SidebarMobile,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
  title: 'Page/Sidebar/Mobile',
} as Meta;

const defaultTemplate: Story<SidebarProviderProps> = (props) => (
  <SidebarProvider {...props}>
    <SidebarMobile />
  </SidebarProvider>
);

export const Default = defaultTemplate.bind({});

Default.args = {
  isOpen: true,
  navigationItems: [
    { current: true, href: '#', icon: HomeIcon, name: 'Dashboard' },
    { current: false, href: '#', icon: UsersIcon, name: 'Team' },
    { current: false, href: '#', icon: FolderIcon, name: 'Projects' },
    { current: false, href: '#', icon: CalendarIcon, name: 'Calendar' },
    { current: false, href: '#', icon: InboxIcon, name: 'Documents' },
    { current: false, href: '#', icon: ChartBarIcon, name: 'Reports' },
  ],
};
