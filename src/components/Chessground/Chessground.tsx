import React, { useEffect, useRef } from 'react';
import { Config as ChessgroundConfig } from 'chessground/config';
import { Chessground as NativeChessground } from 'chessground';
import { Key, Piece } from 'chessground/types';
import { useChessground } from './context';

import 'chessground/assets/chessground.base.css';
import 'chessground/assets/chessground.brown.css';
import 'chessground/assets/chessground.cburnett.css';

export interface Image {
  url?: string;
}
export interface PieceImageMap {
  pawn?: Image;
  bishop?: Image;
  knight?: Image;
  rook?: Image;
  queen?: Image;
  king?: Image;
}

export interface ChessgroundProps {
  chessgroundConfig?: ChessgroundConfig;
  images?: {
    black?: PieceImageMap;
    white?: PieceImageMap;
  };
}

export const Chessground = (props?: ChessgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { chessground, setChessground } = useChessground();

  useEffect(() => {
    if (chessground) {
      chessground.set({
        events: {
          select: (key: Key) => {
            if (chessground.state.dom.elements.ghost) {
              let piece: Piece | undefined;
              chessground.state.pieces.forEach((p, k) => {
                if (key === k) {
                  piece = p;
                }
              });

              if (piece) {
                if (
                  props?.images &&
                  (props.images as any)[piece.color as any] &&
                  (props.images as any)[piece.color as any][piece.role as any]
                ) {
                  const url = (props.images as any)[piece.color as any][piece.role as any].url;

                  chessground.state.dom.elements.ghost.style.backgroundImage = `url(${url})`;
                } else {
                  chessground.state.dom.elements.ghost.style.backgroundImage = ``;
                }
              }
            }
          },
        },
      });
    }
    return () => {
      chessground?.destroy();
    };
  }, [chessground, props?.images]);

  useEffect(() => {
    const chessgroundProps: ChessgroundConfig = {
      coordinates: true,
      highlight: {
        check: true,
        lastMove: true,
      },
      orientation: 'white',
      ...props?.chessgroundConfig,
    };

    if (ref.current) {
      setChessground(NativeChessground(ref.current, chessgroundProps));
    }

    return () => {
      setChessground(undefined);
    };
  }, [ref, setChessground, props]);

  useEffect(() => {
    if (ref.current && chessground) {
      Object.entries(props?.images?.black ?? {}).forEach(([key, value]) =>
        setImage(key as keyof PieceImageMap, 'black', value.url),
      );

      Object.entries(props?.images?.white ?? {}).forEach(([key, value]) =>
        setImage(key as keyof PieceImageMap, 'white', value?.url),
      );
    }
  }, [ref, chessground, props?.images]);

  // console.log('chessground', chessground);

  function setImage(piece: keyof PieceImageMap, color: 'black' | 'white', url?: string) {
    if (ref.current && url) {
      // NOTE: this does not currently work with ghosts because it gets rendered when the user clicks on
      // the piece. And for some reason the chessground library does update the piece when the user clicks
      const pieces = ref.current.getElementsByClassName(`${color} ${piece}`); // Returns the elements

      Array.from(pieces).forEach((item) => ((item as HTMLDivElement).style.backgroundImage = `url(${url})`));
    }
  }

  return (
    <div
      ref={ref}
      className="chessground cburnett green w-full h-full"
      style={{ height: '700px', width: '700px' }}
      data-testid="chessground-container"
    />
  );
};
