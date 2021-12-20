import React, { useEffect, useRef } from 'react';
import { Config as ChessgroundConfig } from 'chessground/config';
import { Chessground as NativeChessground } from 'chessground';
import { useChessground } from './context';
import './css/chessground-base.css';

export type ChessgroundProps = ChessgroundConfig;

export const Chessground = (props?: ChessgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { chessground, setChessground } = useChessground();

  useEffect(() => {
    return () => {
      chessground?.destroy();
    };
  }, [chessground]);

  useEffect(() => {
    const chessgroundProps: ChessgroundProps = {
      ...props,
    };

    if (ref.current) {
      setChessground(NativeChessground(ref.current, chessgroundProps));
    }

    return () => {
      setChessground(undefined);
    };
  }, [ref, setChessground, props]);

  return <div ref={ref} className="chessground cburnett green" data-testid="chessground-container" />;
};
