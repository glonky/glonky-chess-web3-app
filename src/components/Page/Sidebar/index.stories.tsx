import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { SidebarProps } from './interface';
import { Sidebar } from './index';

export default {
  component: Sidebar,
  title: 'Page/Sidebar',
} as Meta;

const defaultTemplate: Story<SidebarProps> = () => (
  <Sidebar
    navigationItems={[
      { current: true, href: '#', icon: HomeIcon, name: 'Dashboard' },
      { current: false, href: '#', icon: UsersIcon, name: 'Team' },
      { current: false, href: '#', icon: FolderIcon, name: 'Projects' },
      { current: false, href: '#', icon: CalendarIcon, name: 'Calendar' },
      { current: false, href: '#', icon: InboxIcon, name: 'Documents' },
      { current: false, href: '#', icon: ChartBarIcon, name: 'Reports' },
    ]}
  />
);

export const Default = defaultTemplate.bind({});
