const router = require('koa-router')();

const ServersController = require('./controllers/servers');

// Servers

router.get('/servers', async (ctx, next) => {
  await new ServersController().index(ctx, next);
});

router.post('/servers', async (ctx, next) => {
  await new ServersController().create(ctx, next);
});

module.exports = router;