import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timestamp from './timestamp';

const LastPrice = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const MarketName = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const MarketData = ({ instrument, currency, lastPrice, bestBid, bestAsk, volume, timestamp }) => (
  <div>
    <MarketName>{instrument} — {currency}</MarketName>
    <LastPrice>
      {lastPrice}
    </LastPrice>
    <div>
      <div>
        <strong>B</strong> {bestBid}
      </div>
      <div>
        <strong>A</strong> {bestAsk}
      </div>
      <div>
        <strong>V</strong> {volume}
      </div>
    </div>
    <Timestamp timestamp={timestamp} />
  </div>
);

MarketData.propTypes = {
  instrument: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  lastPrice: PropTypes.number.isRequired,
  bestBid: PropTypes.number.isRequired,
  bestAsk: PropTypes.number.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  volume: PropTypes.number.isRequired,
};

export default MarketData;
