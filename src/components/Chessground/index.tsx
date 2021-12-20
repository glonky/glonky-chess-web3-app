import dynamic from 'next/dynamic';
import type { ChessgroundProps } from './Chessground';

const Chessground = dynamic<ChessgroundProps>(() => import('./Chessground').then((module) => module.Chessground), {
  ssr: false,
});

export { Chessground };
export * from './context';
