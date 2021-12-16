import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';
import { SidebarProps } from '../interface';

export interface SidebarDesktopProps extends SidebarProps {
  isOpen?: boolean;
}

export const SidebarDesktop = (props: SidebarDesktopProps) => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="h-8 w-36 relative">
              <Image
                priority={true}
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
                layout="fill"
              />
            </div>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {props.navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-indigo-800 text-white' : 'text-white hover:bg-indigo-600 hover:bg-opacity-75',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                )}
              >
                <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
          <a href="#" className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div className="h-9 w-9 relative">
                <Image
                  priority={true}
                  className="rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Tom Cook</p>
                <p className="text-xs font-medium text-indigo-200 group-hover:text-white">View profile</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
