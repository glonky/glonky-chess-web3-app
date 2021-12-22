import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline';
import { SidebarProvider, SidebarProviderProps } from '../context';
import { Web3Provider } from '../../../../context/';
import { Sidebar } from '../';
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
  <Web3Provider>
    <SidebarProvider {...props}>
      <SidebarMobile>
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
      </SidebarMobile>
    </SidebarProvider>
  </Web3Provider>
);

export const Default = defaultTemplate.bind({});

Default.args = {
  isOpen: true,
};
