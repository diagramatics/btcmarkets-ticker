import { connect } from 'react-redux';
import MarketData from './market-data';

const mapStateToProps = ({ btcAud }) => ({
  instrument: 'BTC',
  currency: 'AUD',
  lastPrice: btcAud.marketData.lastPrice,
  bestBid: btcAud.marketData.bestBid,
  bestAsk: btcAud.marketData.bestAsk,
  volume: btcAud.marketData.volume,
  timestamp: btcAud.marketData.timestamp
});

export default connect(mapStateToProps)(MarketData);
