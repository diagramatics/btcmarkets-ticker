const updateMarketData = marketData => ({
  type: 'UPDATE_MARKET_DATA',
  marketName: 'ltcAud',
  marketData,
});

export default { updateMarketData };
