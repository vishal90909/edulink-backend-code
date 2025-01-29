const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    },
    password: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enums: ['user', 'admin']
    },
    isChatBotUsed: {
      type: Boolean,
      default: false
    },
    isCarrerPathwayAssesmentUsed: {
      type: Boolean,
      default: false
    },
    isUniversityAssesmentUsed: {
      type: Boolean,
      default: false
    },
    isVisaQueryAssesmentUsed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

userSchema.statics.isPhoneNumberTaken = async function (phoneNumber) {
  const user = await this.findOne({ phoneNumber })
  return !!user;
}

userSchema.statics.isPasswordCorrect = async function(email, password) {
  const isEmailTaken = await this.findOne({email});
  console.log(isEmailTaken.password)
  if(!isEmailTaken) {
    throw new Error('email is not taken');
  };
  console.log('appsoiusjs', password);
  const isPasswordCorrect = await bcrypt.compare(password, isEmailTaken.password);
  console.log('jhhdhghjjkd', isPasswordCorrect);
  return !!isPasswordCorrect;
}
/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
