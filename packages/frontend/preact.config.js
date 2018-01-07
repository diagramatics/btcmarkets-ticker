export default config => {
  if (config.devServer) {
    config.devServer.proxy = [
      {
        path: '/api/**',
        target: 'http://localhost:3000'
      }
    ];
  }
};
