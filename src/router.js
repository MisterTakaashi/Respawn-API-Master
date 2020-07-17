const router = require('koa-router')();

const ServersController = require('./controllers/servers');
const InstancesController = require('./controllers/instances');

// Instances

router.get('/instances', async (ctx, next) => {
  await new InstancesController().index(ctx, next);
});

router.post('/instances', async (ctx, next) => {
  await new InstancesController().create(ctx, next);
});

// Servers

router.get('/servers', async (ctx, next) => {
  await new ServersController().index(ctx, next);
});

router.post('/servers', async (ctx, next) => {
  await new ServersController().create(ctx, next);
});

module.exports = router;