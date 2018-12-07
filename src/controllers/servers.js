const ApplicationController = require('./application');
const ServerModel = require('../models/server');

class ServersController extends ApplicationController {
  
  // GET /servers
  async index(ctx) {
    this.render_success(ctx, {
      servers: await ServerModel.find()
    });
  }

  // POST /servers
  async create(ctx) {
    const newServer = new ServerModel(ctx.request.body);

    this.render_success(ctx, {
      servers: await newServer.save()
    });
  }
}

module.exports = ServersController;