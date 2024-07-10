const mongoose =  require('mongoose')

const CategorySchema = new mongoose.Schema ({
    name: {type: String, required: true, unique: true},
    createdDate: { type: Date, default: Date.now },
    modifiedAt: Date,
}, {
    collection: 'categories'
}
);
CategorySchema.pre('save', function(next) {
    this.modifiedAt = Date.now();
    next();
  });
  
  CategorySchema.pre('findOneAndUpdate', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  CategorySchema.pre('updateOne', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  CategorySchema.pre('updateMany', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });
  
  CategorySchema.pre('update', function(next) {
    this.set({ modifiedAt: Date.now() });
    next();
  });

module.exports = mongoose.model('Category',CategorySchema)