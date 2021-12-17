import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { SelectorIcon } from '@heroicons/react/outline';

export interface ProfileProps {
  isOpen?: boolean;
}

export const Profile = (props?: ProfileProps) => {
  return (
    <Menu as="div" className="ml-3 md:ml-0 md:px-3 relative md:inline-block md:text-left">
      <div>
        <Menu.Button className="md:group max-w-xs md:w-full flex items-center md:block rounded-full md:rounded-md md:px-3.5 md:py-2 text-sm md:text-left font-medium text-white bg-indigo-800 md:hover:bg-indigo-600 md:hover:bg-opacity-75 focus:outline-none focus:ring-2 ring-offset-2 ring-indigo-500 ring-offset-white ring-offset-opacity-60">
          <span className="hidden md:flex md:w-full justify-between items-center">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  className="bg-indigo-600 bg-opacity-75 rounded-full flex-shrink-0"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  alt=""
                  layout="fill"
                />
              </div>
              <span className="flex-1 flex flex-col min-w-0">
                <span className="text-white text-sm font-medium truncate">Jessy Schwarz</span>
                <span className="text-white text-sm truncate">@jessyschwarz</span>
              </span>
            </span>
            <SelectorIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="md:hidden">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 relative">
              <Image
                className="rounded-full"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                layout="fill"
              />
            </div>
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="text-white bg-indigo-700 z-10 md:mx-3 origin-top-right md:origin-top absolute right-0 md:left-0 mt-2 md:mt-1 w-48 md:w-auto rounded-md shadow-lg ring-1 ring-indigo-500 divide-y divide-gray-200 dark:divide-white divide-opacity-10 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  View profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  Notifications
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  Get desktop app
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  Support
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames('block px-4 py-2 text-sm', {
                    'bg-indigo-600 bg-opacity-75 text-white': active,
                    'text-white': !active,
                  })}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
