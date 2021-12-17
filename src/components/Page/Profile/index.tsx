import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { useEthers } from '@usedapp/core';
import { ConnectWalletButton } from '../../ConnectWallet/Button';

export interface ProfileProps {
  isOpen?: boolean;
}

export const Profile = (props?: ProfileProps) => {
  const { account, deactivate } = useEthers();

  return (
    <Menu as="div" className="ml-3 md:ml-0 md:px-3 relative md:inline-block md:text-left">
      <div>
        <ConnectWalletButton />
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
          {account && (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames('block px-4 py-2 text-sm w-full text-left', {
                      'bg-indigo-600 bg-opacity-75 text-white': active,
                      'text-white': !active,
                    })}
                    onClick={async () => {
                      await navigator.clipboard.writeText(account);
                    }}
                  >
                    Copy Address
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames('block px-4 py-2 text-sm w-full text-left', {
                      'bg-indigo-600 bg-opacity-75 text-white': active,
                      'text-white': !active,
                    })}
                    onClick={() => {
                      deactivate();
                    }}
                  >
                    Disconnect
                  </button>
                )}
              </Menu.Item>
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
