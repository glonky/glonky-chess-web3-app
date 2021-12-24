import { Ropsten, DAppProvider, Config, Mainnet } from '@usedapp/core';
import { PropsWithChildren } from 'react';

const config: Config = {
  readOnlyChainId: Ropsten.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.NEXT_PUBLIC_INFURA_MAINNET_RPC_ENDPOINT ?? '',
    [Ropsten.chainId]: process.env.NEXT_PUBLIC_INFURA_ROPSTEN_RPC_ENDPOINT ?? '',
  },
};

export const Web3Provider = (props: PropsWithChildren<any>) => {
  return <DAppProvider config={config}>{props.children}</DAppProvider>;
};
