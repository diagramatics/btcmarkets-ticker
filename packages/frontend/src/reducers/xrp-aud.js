export default function btcAudReducer(
  state = {
    marketData: {}
  },
  action
) {
  if (action.type === 'UPDATE_MARKET_DATA' && action.marketName === 'xrp-aud') {
    return {
      ...state,
      marketData: {
        lastPrice: action.marketData.lastPrice,
        bestBid: action.marketData.bestBid,
        bestAsk: action.marketData.bestAsk,
        volume: action.marketData.volume,
        timestamp: action.marketData.timestamp * 1000
      }
    };
  }
  return state;
}
