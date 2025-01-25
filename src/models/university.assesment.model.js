const mongoose = require('mongoose');

const unsiversityAssesmentScehma = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  selectedQuestion: [
    {
      question: {
        type: String,
        required: false
      },
      answer: {
        type: String,
        required: false
      }
    }
  ],
  country: {
    type: String,
    required: true
  },
  topCourses: {
    type: [String],
    required: true
  },
  topUniversities: {
    type: [String],
    required: true
  },
  filteredImages: [
    {
      universityName: {
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

const universityAssesmentModel = mongoose.model('universityAssesment', unsiversityAssesmentScehma);

module.exports = universityAssesmentModel;