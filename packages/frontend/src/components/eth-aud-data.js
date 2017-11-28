import { connect } from 'react-redux';
import MarketData from './market-data';

const mapStateToProps = ({ ethAud }) => ({
  instrument: 'ETH',
  currency: 'AUD',
  lastPrice: ethAud.marketData.lastPrice,
  bestBid: ethAud.marketData.bestBid,
  bestAsk: ethAud.marketData.bestAsk,
  volume: ethAud.marketData.volume,
  timestamp: ethAud.marketData.timestamp
});

export default connect(mapStateToProps)(MarketData);
