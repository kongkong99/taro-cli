function success(ctx, data) {
  ctx.status = 200;
  ctx.body = {
    code: 200,
    data
  };
}

module.exports = (router) => {
  router.get('/api/mock/data', (ctx) => {
    success(ctx, 'mock data');
  });
};