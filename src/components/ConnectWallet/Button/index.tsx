import React from 'react';
import { Menu } from '@headlessui/react';
import { SelectorIcon } from '@heroicons/react/outline';
import { useEthers } from '@usedapp/core';
import classNames from 'classnames';
import MetaMaskIcon from '../../../../public/images/metamask/metamask-fox.svg';

export const ConnectWalletButton = () => {
  const { activateBrowserWallet, account } = useEthers();
  const buttonClassName =
    'md:group max-w-xs md:w-full flex items-center md:block rounded-md md:px-3.5 md:py-2 text-sm font-medium text-white bg-indigo-800 md:hover:bg-indigo-600 md:hover:bg-opacity-75 focus:outline-none focus:ring-2 ring-offset-2 ring-indigo-500 ring-offset-white ring-offset-opacity-60';

  if (!account) {
    return (
      <button
        onClick={() => activateBrowserWallet()}
        className={classNames(buttonClassName, 'py-2 px-3 md:p-0 justify-center')}
        data-testid="connect-wallet-connect-button"
      >
        Connect Wallet
      </button>
    );
  }

  const accountIdWithEllipsis = `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}`;

  return (
    <Menu.Button className={classNames(buttonClassName, 'text-left')} data-testid="connect-wallet-account-id-button">
      <span className="flex w-full justify-between items-center">
        <span className="flex min-w-0 items-center justify-between space-x-2 md:space-x-3 py-2 px-3 md:p-0">
          <MetaMaskIcon className="w-5 h-5" alt="MetaMask" />
          <span className="flex-1 flex flex-col min-w-0">
            <span
              className="text-white text-sm font-medium truncate"
              data-testid="connect-wallet-account-id"
              aria-label={account}
            >
              {accountIdWithEllipsis}
            </span>
          </span>
        </span>
        <SelectorIcon className="hidden md:block flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
      </span>
    </Menu.Button>
  );
};
