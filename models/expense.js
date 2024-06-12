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
}, {
    collection: 'expense'
});

module.exports = mongoose.model('Expense', ExpenseSchema)