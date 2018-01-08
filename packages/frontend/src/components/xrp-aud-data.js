import { connect } from 'react-redux';
import MarketData from './market-data';

const mapStateToProps = ({ xrpAud }) => ({
  instrument: 'XRP',
  currency: 'AUD',
  lastPrice: xrpAud.marketData.lastPrice,
  bestBid: xrpAud.marketData.bestBid,
  bestAsk: xrpAud.marketData.bestAsk,
  volume: xrpAud.marketData.volume,
  timestamp: xrpAud.marketData.timestamp
});

export default connect(mapStateToProps)(MarketData);
