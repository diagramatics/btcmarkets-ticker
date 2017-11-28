import { h, Component } from 'preact';
import styled from 'styled-components';
import colors from '../style/colors';
import { getMarketData } from '../lib/api';
import { formatPrice } from '../lib/price';
import store from '../store';
import Container from '../components/container';
import CenterAlign from '../components/center-align';
import BtcAudData from '../components/btc-aud-data';
import EthAudData from '../components/eth-aud-data';
import LtcAudData from '../components/ltc-aud-data';
import btcAudActions from '../actions/btc-aud-data';
import ethAudActions from '../actions/eth-aud-data';
import ltcAudActions from '../actions/ltc-aud-data';

const DataItem = styled.div`
  background: ${colors.background.white};
  padding: 16px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px 16px;
  grid-auto-rows: 1fr;
`;

export default class Home extends Component {
  componentWillMount() {
    getMarketData('btc', 'aud').then(response => {
      store.dispatch(
        btcAudActions.updateMarketData({
          lastPrice: formatPrice(response.data.lastPrice),
          bestBid: formatPrice(response.data.bestBid),
          bestAsk: formatPrice(response.data.bestAsk),
          volume: response.data.volume24h,
          timestamp: new Date(response.data.timestamp * 1000)
        })
      );
    });

    getMarketData('eth', 'aud').then(response => {
      store.dispatch(
        ethAudActions.updateMarketData({
          lastPrice: formatPrice(response.data.lastPrice),
          bestBid: formatPrice(response.data.bestBid),
          bestAsk: formatPrice(response.data.bestAsk),
          volume: response.data.volume24h,
          timestamp: new Date(response.data.timestamp * 1000)
        })
      );
    });

    getMarketData('ltc', 'aud').then(response => {
      store.dispatch(
        ltcAudActions.updateMarketData({
          lastPrice: formatPrice(response.data.lastPrice),
          bestBid: formatPrice(response.data.bestBid),
          bestAsk: formatPrice(response.data.bestAsk),
          volume: response.data.volume24h,
          timestamp: new Date(response.data.timestamp * 1000)
        })
      );
    });
  }

  render() {
    return (
      <CenterAlign>
        <Container>
          <Grid>
            <DataItem>
              <BtcAudData />
            </DataItem>
            <DataItem>
              <EthAudData />
            </DataItem>
            <DataItem>
              <LtcAudData />
            </DataItem>
          </Grid>
        </Container>
      </CenterAlign>
    );
  }
}
