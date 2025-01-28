const mongoose = require('mongoose');

const visaQuerySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  selectedQuestion: [
    {
      question: {
        type: String,
        required: true
      },
      selectedOption: {
        type: String,
        required: true
      }
    }
  ],
  country: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  percentageChance: {
    type: Number,
    required: true
  },
},
  {
    timestamps: true
  }
);

const visaQueryModel = mongoose.model('visaQuery', visaQuerySchema);

module.exports = visaQueryModel;