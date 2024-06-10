const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
mongoose.connect('mongodb://127.0.0.1/expenses').
    catch(error => handlError(error))


const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
    required: true,
  } ,
  date: { type: Date, default: Date.now }
}, {
    collection: 'users'
});
// Password hashing middleware
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel