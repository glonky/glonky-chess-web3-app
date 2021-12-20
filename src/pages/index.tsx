import { Chessground } from '../components/Chessground';
import { ChessgroundProvider } from '../components/Chessground/context';
import { Page } from '../components/Page';

export default function Game() {
  return (
    <Page>
      <ChessgroundProvider>
        <Chessground />
      </ChessgroundProvider>
    </Page>
  );
}
