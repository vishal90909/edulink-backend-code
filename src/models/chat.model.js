const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [
    {
      role: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  ]
},
{
  timestamps: true
}
);

const chatModel = mongoose.model('chats', chatSchema);

module.exports = chatModel;