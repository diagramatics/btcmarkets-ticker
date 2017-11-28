const updateMarketData = marketData => ({
  type: 'UPDATE_MARKET_DATA',
  marketName: 'btcAud',
  marketData
});

export default { updateMarketData };
