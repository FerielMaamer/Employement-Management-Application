const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const { isEmail } = require('validator');

const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    username : {primaryKey:true, type: String, maxLength: 100},
    email : {
        type: String, 
        maxLength: 50, 
        unique: true,
        validate: [isEmail, 'invalid email'],
    },
    password: {type: String, maxLength: 50}
})

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}

module.exports = mongoose.model("user", userSchema);
