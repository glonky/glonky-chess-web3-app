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

Default.args = {};

Queen.args = {
  fen: '8/8/8/4p1K1/2q1P3/8/8/8 b - - 0 1',
};
WhiteCheck.args = {
  check: 'white',
  fen: '8/8/8/4p1K1/2k1P3/8/8/8 b - - 0 1',
};
