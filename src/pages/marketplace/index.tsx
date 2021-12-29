import { NextPage } from 'next';
import { Page } from '../../components/Page';

const Marketplace: NextPage = (props) => {
  return (
    <Page>
      <h1>Marketplace</h1>
      <div>{props.children}</div>
      {/* <Card /> */}
    </Page>
  );
};

export default Marketplace;
