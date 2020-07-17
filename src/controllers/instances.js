const ApplicationController = require('./application');
const InstanceModel = require('../models/instance');

class InstancesController extends ApplicationController {
  
  // GET /instances
  async index(ctx) {
    this.render_success(ctx, {
      instances: await InstanceModel.find()
    });
  }

  // POST /instances
  async create(ctx) {
    const newInstance = new InstanceModel(ctx.request.body);

    this.render_success(ctx, {
      instances: await newInstance.save()
    });
  }
}

module.exports = InstancesController;