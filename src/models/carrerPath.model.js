const mongoose = require('mongoose');

const carrerPathWaySchema = new mongoose.Schema({
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
  topCarrers: {
    type: [String],
    required: true
  },
  filteredImages: [
    {
      course: {
        type: String,
        required: true
      }, 
      imgPath: {
        type: String,
        required: true
      }, 
    }
  ]
},
  {
    timestamps: true
  }
);

const carrerPathWayModel = mongoose.model('carrerPathway', carrerPathWaySchema);

module.exports = carrerPathWayModel;