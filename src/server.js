const koa = require('koa');
const koaJson = require('koa-json');
const koaBodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');

const router = require('./router');

mongoose.connect('mongodb://db/respawn');

const port = 3000;
const app = new koa();

app.use(koaJson());
app.use(koaBodyParser());
app.use(router.routes());

app.listen(port, () => {
    console.log('Server listening on port', port);
});