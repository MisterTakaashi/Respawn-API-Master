const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  ip: {type: String, required: true},
  port: {type: String, required: true, default: '3000'}
}, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

module.exports = mongoose.model('Instance', schema);