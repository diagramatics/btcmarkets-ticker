import { connect } from 'react-redux';
import MarketData from './market-data';

const mapStateToProps = ({ ltcAud }) => ({
  instrument: 'LTC',
  currency: 'AUD',
  lastPrice: ltcAud.marketData.lastPrice,
  bestBid: ltcAud.marketData.bestBid,
  bestAsk: ltcAud.marketData.bestAsk,
  volume: ltcAud.marketData.volume,
  timestamp: ltcAud.marketData.timestamp
});

export default connect(mapStateToProps)(MarketData);
