const Router = require('koa-router');

const router = new Router();

router.post('/api/normal-errors', async (ctx, next) => {
  let body = ctx.request.body
  await ctx.mysql.writeError(body.errorInfo);
  ctx.response.type = 'application/json';
  ctx.response.body = {};
  next();
})

module.exports = router.routes();