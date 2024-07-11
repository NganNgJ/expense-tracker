const mongoose =  require('mongoose')

const ExpenseSchema = new mongoose.Schema ({
    description: {type: String, required: false},
    amount: {type: Number, require: true},
    expenseDate: {type: Date, required: true, default: Date.now},
    createDate: {type: Date, default: Date.now},
    user:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        require: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Category',
        required: true,
    },
    modifiedAt : Date
}, {
    collection: 'expense'
});

  ExpenseSchema.pre('save', function(next) {
    this.modifiedAt = Date.now();
    next();
  });
  
  ExpenseSchema.pre('findOneAndUpdate', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  ExpenseSchema.pre('updateOne', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  ExpenseSchema.pre('updateMany', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  ExpenseSchema.pre('update', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });

module.exports = mongoose.model('Expense', ExpenseSchema)