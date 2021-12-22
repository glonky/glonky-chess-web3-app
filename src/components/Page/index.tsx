import React, { PropsWithChildren } from 'react';
import { FolderIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { SidebarProvider } from './Sidebar/context';
import { Header } from './Header';
export const Page = (props: PropsWithChildren<any>) => {
  return (
    <SidebarProvider>
      <div>
        <Sidebar>
          <Sidebar.Link href="/dashboard">
            <Sidebar.Link.Icon icon={<HomeIcon />} />
            <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
          </Sidebar.Link>
          <Sidebar.Link href="/nft">
            <Sidebar.Link.Icon icon={<UsersIcon />} />
            <Sidebar.Link.Text>Team</Sidebar.Link.Text>
          </Sidebar.Link>
          <Sidebar.Link href="/marketplace">
            <Sidebar.Link.Icon icon={<FolderIcon />} />
            <Sidebar.Link.Text>Marketplace</Sidebar.Link.Text>
          </Sidebar.Link>
        </Sidebar>
        <div className="md:pl-64 flex flex-col flex-1 transition duration-500">
          <Header />
          <main className="flex-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{props.children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};
