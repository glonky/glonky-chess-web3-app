import React from 'react';
import Image from 'next/image';
import { Profile } from '../../Profile';
import { SidebarProps } from '..';

export const SidebarDesktop = (props: SidebarProps) => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="h-8 w-36 relative">
              <Image
                priority={true}
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
                layout="fill"
              />
            </div>
          </div>
          <div className="mt-6 h-0 flex-1 flex flex-col">
            <Profile />
            <nav className="px-3 mt-6">
              <div className="space-y-1">{props.children}</div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
