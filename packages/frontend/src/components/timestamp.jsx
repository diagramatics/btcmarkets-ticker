import { h, Component } from 'preact';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../style/colors';
import { relativeTime } from '../lib/timestamp';

const Text = styled.div`
  color: ${colors.text.mid};
  margin: 1rem 0 0;
`;


export default class Timestamp extends Component {
  static propTypes = {
    timestamp: PropTypes.number,
  }

  static defaultProps = {
    timestamp: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      relativeTime: '',
    };
  }

  componentWillMount() {
    this.setTimerToUpdate();
  }

  componentWillUnmount() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
    }
  }

  setTimerToUpdate() {
    this.timer = setTimeout(() => {
      this.updateRelativity();
      this.setTimerToUpdate();
    }, 1000);
  }

  updateRelativity() {
    this.setState({
      relativeTimeText: relativeTime(this.props.timestamp),
    });
  }

  timer = null;

  render(props, { relativeTimeText }) {
    return (
      <Text>Updated {relativeTimeText}</Text>
    );
  }
}
