import React, { PropsWithChildren } from 'react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { SidebarProvider } from './Sidebar/context';
import { Header } from './Header';
export const Page = (props: PropsWithChildren<any>) => {
  const navigation = [
    { current: true, href: '#', icon: HomeIcon, name: 'Dashboard' },
    { current: false, href: '#', icon: UsersIcon, name: 'Team' },
    { current: false, href: '#', icon: FolderIcon, name: 'Projects' },
    { current: false, href: '#', icon: CalendarIcon, name: 'Calendar' },
    { current: false, href: '#', icon: InboxIcon, name: 'Documents' },
    { current: false, href: '#', icon: ChartBarIcon, name: 'Reports' },
  ];

  return (
    <SidebarProvider navigationItems={navigation}>
      <div>
        <Sidebar />
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
