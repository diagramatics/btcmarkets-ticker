import { h, Component } from 'preact';
import { getMarketData } from '../../lib/api';
import Container from '../../components/container';
import MarketData from '../../components/market-data';


function formatPrice(price) {
  return new Intl.NumberFormat(
    'en-AU',
    { style: 'currency', currency: 'AUD' },
  )
    .format(price);
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPrice: 0,
      bestBid: 0,
      bestAsk: 0,
    };
  }


  componentWillMount() {
    getMarketData()
      .then((response) => {
        this.setState({
          lastPrice: formatPrice(response.data.lastPrice),
          bestBid: formatPrice(response.data.bestBid),
          bestAsk: formatPrice(response.data.bestAsk),
        });
      });
  }

  render(props, { lastPrice, bestBid, bestAsk }) {
    return (
      <Container>
        <MarketData
          lastPrice={lastPrice}
          bestBid={bestBid}
          bestAsk={bestAsk}
        />
      </Container>
    );
  }
}
