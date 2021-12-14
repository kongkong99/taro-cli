module.exports = {
  env: {
    NODE_ENV: '"development"',
    BASE_URL: '"/"',
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      host: 'localhost',
      port: 10088,
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:9000',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api': '',
          // }
        }
      }
    },
  }
};
