import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline';
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
      <Sidebar>
        <Sidebar.Link href="/dashboard">
          <Sidebar.Link.Icon icon={<HomeIcon />} />
          <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link href="/team">
          <Sidebar.Link.Icon icon={<UsersIcon />} />
          <Sidebar.Link.Text>Team</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link href="/projects">
          <Sidebar.Link.Icon icon={<FolderIcon />} />
          <Sidebar.Link.Text>Projects</Sidebar.Link.Text>
        </Sidebar.Link>
      </Sidebar>
    </SidebarProvider>
  </Web3Provider>
);

export const Default = defaultTemplate.bind({});

Default.args = {
  isOpen: true,
};
