const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

const api = require('./api');

api(router);

// 处理跨域问题
app.use(async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	ctx.set('Access-Control-Allow-Credentials', "true");
	if (ctx.method == 'OPTIONS') {
		ctx.body = 200;
	} else {
		await next();
	}
});

app
	.use(router.routes())
	.use(router.allowedMethods());
app.listen(9000, () => {
	console.log('server listen port 9000');
});