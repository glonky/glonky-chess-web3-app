import { MenuAlt1Icon } from '@heroicons/react/solid';
import React from 'react';
import { Profile } from '../Profile';
import { useSidebar } from '../Sidebar/context';

export const Header = () => {
  const { setIsOpen } = useSidebar();

  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 shadow-md md:hidden">
      <button
        type="button"
        className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 flex justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center ml-auto">
          <Profile />
        </div>
      </div>
    </div>
  );
};
