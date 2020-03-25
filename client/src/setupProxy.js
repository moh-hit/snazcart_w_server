const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
  app.use(
    '/auth/google',
    createProxyMiddleware({
      target: 'http://localhost:3005',
      changeOrigin: true
    })
  );
  app.use(
    '/api/current_users',
    createProxyMiddleware({
      target: 'http://localhost:3005'
        })
  );

  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://localhost:3005'
        })
  );

};