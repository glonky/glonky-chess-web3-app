import React, { PropsWithChildren, useState } from 'react';
import { Api as ChessgroundApi } from 'chessground/api';

export interface ChessgroundContextInterface {
  chessground?: ChessgroundApi;
  setChessground: React.Dispatch<React.SetStateAction<ChessgroundApi | undefined>>;
}

const ChessgroundContext = React.createContext<ChessgroundContextInterface>({} as ChessgroundContextInterface);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ChessgroundProviderProps {}

const ChessgroundProvider = ({ children }: PropsWithChildren<ChessgroundProviderProps>) => {
  const [chessground, setChessground] = useState<ChessgroundApi>();

  return <ChessgroundContext.Provider value={{ chessground, setChessground }}>{children}</ChessgroundContext.Provider>;
};

function useChessground() {
  const context = React.useContext(ChessgroundContext);

  if (context === undefined) {
    throw new Error(`useChessground must be used within a ChessgroundProvider`);
  }

  return context;
}

export { ChessgroundProvider, useChessground };
