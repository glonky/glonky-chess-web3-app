import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Menu } from '@headlessui/react';

import { ConnectWalletButton } from '../index';

const mockUseEthers = jest.fn();
jest.mock('@usedapp/core', () => {
  return { useEthers: mockUseEthers };
});

// NOTE: Skip tests until this discussion is resolved: https://github.com/vercel/next.js/discussions/31152
describe.skip('Unit | Components | DarkModeToggle', () => {
  afterEach(() => {
    mockUseEthers.mockClear();
  });

  it('renders connect wallet button when account is not connected', () => {
    const accountId = null;
    const activateBrowserWalletMock = jest.fn();

    mockUseEthers.mockReturnValue({
      account: accountId,
      activateBrowserWallet: activateBrowserWalletMock,
    } as any);

    render(
      <Menu>
        <ConnectWalletButton />
      </Menu>,
    );

    const connectWalletButton = screen.getByTestId('connect-wallet-connect-button');
    const accountIdButton = screen.getByTestId('connect-wallet-account-id-button');
    const accountIdText = screen.getByTestId('connect-wallet-account-id');

    expect(connectWalletButton).toBeInTheDocument();
    expect(accountIdButton).not.toBeInTheDocument();
    expect(accountIdText).not.toBeInTheDocument();
  });

  it('renders account id when account is connected', () => {
    const accountId = '0x1234567890123456789012345678901234567890';
    const activateBrowserWalletMock = jest.fn();

    mockUseEthers.mockReturnValue({
      account: accountId,
      activateBrowserWallet: activateBrowserWalletMock,
    } as any);
    render(
      <Menu>
        <ConnectWalletButton />
      </Menu>,
    );

    const connectWalletButton = screen.getByTestId('connect-wallet-connect-button');
    const accountIdButton = screen.getByTestId('connect-wallet-account-id-button');
    const accountIdText = screen.getByTestId('connect-wallet-account-id');

    expect(connectWalletButton).not.toBeInTheDocument();
    expect(accountIdButton).toBeInTheDocument();
    expect(accountIdText).toBeInTheDocument();
    expect(accountIdText.ariaLabel).toBe(accountId);
  });

  it('calls activateBrowserWallet when Connect Wallet button is clicked', () => {
    const accountId = null;
    const activateBrowserWalletMock = jest.fn();

    mockUseEthers.mockReturnValue({
      account: accountId,
      activateBrowserWallet: activateBrowserWalletMock,
    } as any);
    render(
      <Menu>
        <ConnectWalletButton />
      </Menu>,
    );

    const connectWalletButton = screen.getByTestId('connect-wallet-connect-button');
    fireEvent.click(connectWalletButton);

    expect(connectWalletButton).not.toBeInTheDocument();
    expect(activateBrowserWalletMock).toHaveBeenCalled();
  });
});
