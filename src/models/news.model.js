const { required } = require('joi');
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
},
{
  timestamps: true
}
);

const newsModel = mongoose.model('news', newsSchema);

module.exports = newsModel;