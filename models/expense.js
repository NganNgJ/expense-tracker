const mongoose =  require('mongoose ')

const ExpenseSchema = new mongoose.Schema ({
    description: {type: String, required: false},
    amount: {type: Number, require: true},
    date: {type: Date, default: Date.now},
    user:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User',
        require: true,
    },
    catetgory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
}, {
    collection: 'expense'
});

module.exports = mongoose.model('Expense', ExpenseSchema)