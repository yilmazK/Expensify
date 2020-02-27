const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3},
    entries: {type: Array, required: true}
}, {
    timestamps: true,
});

const User = mongoose.model('category', categorySchema);

module.exports = User;