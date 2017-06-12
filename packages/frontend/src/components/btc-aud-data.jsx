import { connect } from 'react-redux';
import MarketData from './market-data';

const mapStateToProps = state => ({
  lastPrice: state.btcAudReducer.marketData.lastPrice,
  bestBid: state.btcAudReducer.marketData.bestBid,
  bestAsk: state.btcAudReducer.marketData.bestAsk,
  volume: state.btcAudReducer.marketData.volume,
  timestamp: state.btcAudReducer.marketData.timestamp,
});

export default connect(mapStateToProps)(MarketData);
