const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  ip: {type: String, required: true},
  port: {type: String, required: true, default: '8081'}
}, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

module.exports = mongoose.model('Server', schema);