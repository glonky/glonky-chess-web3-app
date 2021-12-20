import React from 'react';
import { render, screen } from '@testing-library/react';

import { Chessground, ChessgroundProvider } from '../';

// NOTE: Skip tests until this discussion is resolved:
// https://github.com/vercel/next.js/discussions/31152
describe.skip('Unit | Components | Chessground', () => {
  it('renders the container', async () => {
    render(
      <ChessgroundProvider>
        <Chessground />
      </ChessgroundProvider>,
    );

    const chessgroundContainer = await screen.findByTestId('chessground-container');

    expect(chessgroundContainer).toBeInTheDocument();
  });
});
