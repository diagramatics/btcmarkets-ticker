import { h, Component } from 'preact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../style/colors';
import Container from '../components/container';
import CenterAlign from '../components/center-align';
import BtcAudData from '../components/btc-aud-data';
import EthAudData from '../components/eth-aud-data';
import LtcAudData from '../components/ltc-aud-data';
import { fetchMarketData } from '../actions/market-data';

const DataItem = styled.div`
  background: ${colors.background.white};
  padding: 16px 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px 16px;
  grid-auto-rows: 1fr;
`;

class Home extends Component {
  componentDidMount() {
    this.props.fetchMarketData('btc', 'aud');
    this.props.fetchMarketData('eth', 'aud');
    this.props.fetchMarketData('ltc', 'aud');
  }

  render() {
    return (
      <CenterAlign>
        <Container>
          <Grid>
            <DataItem>
              <BtcAudData />
            </DataItem>
            <DataItem>
              <EthAudData />
            </DataItem>
            <DataItem>
              <LtcAudData />
            </DataItem>
          </Grid>
        </Container>
      </CenterAlign>
    );
  }
}

Home.propTypes = {
  fetchMarketData: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
  fetchMarketData: (instrument, currency) =>
    dispatch(fetchMarketData(instrument, currency))
}))(Home);
