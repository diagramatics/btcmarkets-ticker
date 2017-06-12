const updateMarketData = marketData => ({
  type: 'UPDATE_MARKET_DATA',
  marketName: 'ethAud',
  marketData,
});

export default { updateMarketData };
