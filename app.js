const Koa = require('koa');
const cors = require("koa2-cors");
const bodyParser = require('koa-bodyparser')
const router = require('./router');
const mysql = require('./sql');
const app = new Koa();
app.context.mysql = new mysql();

app.use(bodyParser());

app.use(async (ctx, next) => {
  await next();
});


app.use(cors({
  origin: "*",
  credentials: true, //是否允许发送Cookie
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
  allowHeaders: ["Content-Type", "Authorization", "Accept"] //设置服务器支持的所有头信息字段
}));

app.use(router)

app.listen(6688)
console.log('app started at port 6688...');

