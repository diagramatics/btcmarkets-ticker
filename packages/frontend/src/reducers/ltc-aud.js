export default function ltcAudReducer(state = {
  marketData: {},
}, action) {
  if (action.type === 'UPDATE_MARKET_DATA' && action.marketName === 'ltcAud') {
    return {
      ...state,
      marketData: {
        lastPrice: action.marketData.lastPrice,
        bestBid: action.marketData.bestBid,
        bestAsk: action.marketData.bestAsk,
        volume: action.marketData.volume,
        timestamp: action.marketData.timestamp,
      },
    };
  }
  return state;
}
