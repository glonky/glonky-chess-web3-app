import { Mainnet, DAppProvider, Config } from '@usedapp/core';
import { PropsWithChildren } from 'react';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
};

export const Web3Provider = (props: PropsWithChildren<any>) => {
  return <DAppProvider config={config}>{props.children}</DAppProvider>;
};
