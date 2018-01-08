import { h } from 'preact';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import colors from '../style/colors';

const Text = styled.div`
  color: ${colors.text.mid};
  margin: 1rem 0 0;
`;

const Timestamp = ({ timestamp }) => (
  <Text>
    <TimeAgo date={timestamp} />
  </Text>
);

Timestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired
};

export default Timestamp;
