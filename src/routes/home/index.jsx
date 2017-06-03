import { h } from 'preact';
import { getMarketData } from '../../lib/api';
import Container from '../../components/container';
import MarketData from '../../components/market-data';

export default class Home {
  constructor() {
    const marketData = getMarketData();
    console.log(marketData);
  }

  render() {
    return (
      <Container>
        <MarketData />
      </Container>
    );
  }
}
