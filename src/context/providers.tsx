import { PropsWithChildren } from 'react';
import React from 'react';
import { Web3Provider } from './web3-provider';

export const AppProviders = ({ children }: PropsWithChildren<any>) => {
  return <Web3Provider>{children}</Web3Provider>;
};
