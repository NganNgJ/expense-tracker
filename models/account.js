const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/expenses')

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  username: String,
  password: String,
  date: { type: Date, default: Date.now }
}, {
    collection: 'account'
});

const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel