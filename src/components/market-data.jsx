import { h } from 'preact';

export default class MarketData {
  propTypes = {

  };

  render({ lastPrice }) {
    return (
      <div>
        {lastPrice}
      </div>
    );
  }
}
