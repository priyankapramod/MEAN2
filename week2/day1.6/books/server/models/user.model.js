const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-as-promised');
const validator = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator(value) {
        return validator.isEmail(value);
      }
    }
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) { return next(); }

  bcrypt.hash(this.password, 10)
    .then(hashed => {
      this.password = hashed;
      next();
    })
    .catch(next);
});

userSchema.statics.validatePassword = function(candidatePassword, hashedPassword) {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);
