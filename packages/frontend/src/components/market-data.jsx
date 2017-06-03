import { h } from 'preact';
import PropTypes from 'prop-types';

const MarketData = ({ lastPrice, bestBid, bestAsk }) => (
  <div>
    <div>
      {lastPrice}
    </div>
    <div>
      {bestBid}
    </div>
    <div>
      {bestAsk}
    </div>
  </div>
);

MarketData.defaultProps = {
  lastPrice: 0,
  bestBid: 0,
  bestAsk: 0,
};

MarketData.propTypes = {
  lastPrice: PropTypes.number,
  bestBid: PropTypes.number,
  bestAsk: PropTypes.number,
};

export default MarketData;
