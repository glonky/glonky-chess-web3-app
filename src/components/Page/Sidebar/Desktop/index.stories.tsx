import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { SidebarProvider, SidebarProviderProps } from '../context';
import { Web3Provider } from '../../../../context/';
import { SidebarDesktop } from './index';

export default {
  component: SidebarDesktop,
  title: 'Page/Sidebar/Desktop',
} as Meta;

const defaultTemplate: Story<SidebarProviderProps> = (props) => (
  <Web3Provider>
    <SidebarProvider {...props}>
      <SidebarDesktop />
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
