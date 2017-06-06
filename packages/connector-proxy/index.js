const micro = require('micro');
const { parse } = require('url');
const { createProxyServer } = require('http-proxy');
const { argv } = require('yargs');


const proxyServer = createProxyServer();
proxyServer.on('proxyReq', (proxyReq, req) => {
  if (req.proxySetHeaders) {
    Object.keys(req.proxySetHeaders).forEach(key => {
      proxyReq.setHeader(key, req.proxySetHeaders[key]);
    })
  }
});

micro(async (req, res) => {
  const { pathname, search } = parse(req.url);

  /* API */
  if (new RegExp('^\/api\/.+$'.replace(/\//g, '\\/')).test(pathname)) {
    const newPathname = pathname.replace(/^\/api/, '');
    const target = `http://localhost:5280${newPathname}${search || ''}`;
    console.log(`[API] ${target}`);
    proxyServer.web(req, res, { target, ignorePath: true });
    return;
  }
  /* Frontend (including 404) */
  const target = `http://localhost:8080`;
  console.log(`[FE] ${target}${req.url}`);
  proxyServer.web(req, res, { target });
}).listen(argv.port || 3000, (err) => {
  if (err) {
    console.error(err.stack);
    process.exit(1);
  }

  console.log(`> \u001b[96mReady!\u001b[39m Listening on ${argv.port || 3000}.`);
});
