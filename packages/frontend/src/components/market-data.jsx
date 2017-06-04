import { h } from 'preact';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../style/colors';

const LastPrice = styled.div`
  font-size: 4rem;
  font-weight: bold;
`;

const CenterText = styled.div`
  text-align: center;
`;

const Timestamp = styled.div`
  color: ${colors.text.mid};
  margin: 1rem 0;
`;

const MarketData = ({ lastPrice, bestBid, bestAsk, volume, timestamp }) => (
  <CenterText>
    <LastPrice>
      {lastPrice}
    </LastPrice>
    <div>
      {bestBid}
    </div>
    <div>
      {bestAsk}
    </div>
    <div>
      {volume}
    </div>
    <Timestamp>
      {timestamp.toString()}
    </Timestamp>
  </CenterText>
);

MarketData.defaultProps = {
  lastPrice: 0,
  bestBid: 0,
  bestAsk: 0,
  timestamp: 0,
  volume: 0,
};

MarketData.propTypes = {
  lastPrice: PropTypes.number,
  bestBid: PropTypes.number,
  bestAsk: PropTypes.number,
  timestamp: PropTypes.instanceOf(Date),
  volume: PropTypes.number,
};

export default MarketData;
