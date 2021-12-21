import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Chessground, ChessgroundProps } from './Chessground';
import { ChessgroundProvider } from './context';

export default {
  component: Chessground,
  title: 'Chessground',
} as Meta;

const defaultTemplate: Story<ChessgroundProps> = (args) => {
  return (
    <ChessgroundProvider>
      <Chessground {...args} />
    </ChessgroundProvider>
  );
};

export const Default = defaultTemplate.bind({});
export const Queen = defaultTemplate.bind({});
export const WhiteCheck = defaultTemplate.bind({});

Default.args = {
  chessgroundConfig: {
    orientation: 'black',
  },
};

Queen.args = {
  chessgroundConfig: {
    fen: '8/8/8/4p1K1/2q1P3/8/8/8 b - - 0 1',
  },

  images: {
    black: {
      queen: {
        url: 'https://lh3.googleusercontent.com/HCvPJHsKIFgLup4fJDzzKsxQH3lRtfEcr1Eak0U5RtZycCcLUAsXHCCoy9d8x7XwpCUTe8lSAlo-IC09cEV5a9sb=w359',
      },
    },
    white: {
      pawn: {
        // url: 'https://images.chesscomfiles.com/chess-themes/pieces/alpha/150/wp.png',
        url: 'https://lh3.googleusercontent.com/sdy97_Rs91B8taHT3DbvR7ub1aGeoTzfJ_OdK91Bn-PiQdjJArRGE1baA40RIimwaz0thLCz1reUvvlp6rJSyu6l=w359',
      },
    },
  },
};
WhiteCheck.args = {
  chessgroundConfig: {
    check: 'white',
    fen: '8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1',
  },
};
