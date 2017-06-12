import { h, Component } from 'preact';
import { getMarketData } from '../../lib/api';
import { formatPrice } from '../../lib/price';
import store from '../../store';
import Container from '../../components/container';
import CenterAlign from '../../components/center-align';
import BtcAudData from '../../components/btc-aud-data';
import { updateMarketData } from '../../actions/btc-aud-data';

export default class Home extends Component {
  componentWillMount() {
    getMarketData()
      .then((response) => {
        store.dispatch(updateMarketData({
          lastPrice: formatPrice(response.data.lastPrice),
          bestBid: formatPrice(response.data.bestBid),
          bestAsk: formatPrice(response.data.bestAsk),
          volume: response.data.volume24h,
          timestamp: new Date(response.data.timestamp * 1000),
        }));
      });
  }

  render() {
    return (
      <CenterAlign>
        <Container>
          <BtcAudData />
        </Container>
      </CenterAlign>
    );
  }
}
