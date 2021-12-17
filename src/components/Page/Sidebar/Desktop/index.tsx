import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';
import { Profile } from '../../Profile';
import { useSidebar } from '../context';

export const SidebarDesktop = () => {
  const { navigationItems } = useSidebar();

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
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames('group flex items-center px-2 py-2 text-sm font-medium rounded-md', {
                      'bg-indigo-800 text-white': item.current,
                      'text-white hover:bg-indigo-600 hover:bg-opacity-75': !item.current,
                    })}
                  >
                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
