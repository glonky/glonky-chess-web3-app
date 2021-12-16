import React, { PropsWithChildren } from 'react';
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
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
    <div>
      <Sidebar navigationItems={navigation} />
      <div className="md:pl-64 flex flex-col flex-1 transition duration-500 bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <main className="flex-1">
          {/* <div className="py-6"> */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{props.children}</div>
          {/* </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
};
