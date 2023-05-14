const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    website: { type: String, required: true},
    userId: { type: String, required: true},
    password: { type: String, required: true},
  });
  
  module.exports = mongoose.model('Data', dataSchema);