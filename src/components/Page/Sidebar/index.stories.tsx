import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { Web3Provider } from '../../../context';
import { SidebarProvider, SidebarProviderProps } from './context';
import { Sidebar } from './index';

export default {
  component: Sidebar,
  title: 'Page/Sidebar',
} as Meta;

const defaultTemplate: Story<SidebarProviderProps> = (props) => (
  <Web3Provider>
    <SidebarProvider {...props}>
      <Sidebar />
    </SidebarProvider>
  </Web3Provider>
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
