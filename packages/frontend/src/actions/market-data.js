import { getMarketData } from '../lib/api';
import { formatPrice } from '../lib/price';

export function updateMarketData(instrument, currency, marketData) {
  return {
    type: 'UPDATE_MARKET_DATA',
    marketName: `${instrument}-${currency}`,
    marketData
  };
}

export function fetchMarketData(instrument, currency) {
  return async dispatch => {
    const response = await getMarketData(instrument, currency);

    dispatch(
      updateMarketData(instrument, currency, {
        lastPrice: formatPrice(response.data.lastPrice),
        bestBid: formatPrice(response.data.bestBid),
        bestAsk: formatPrice(response.data.bestAsk),
        volume: response.data.volume24h,
        timestamp: new Date(response.data.timestamp)
      })
    );
  };
}
