const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    author: String,
    brand: String,
    type: String,
    weight: String,
    length: String,
    breadth: String,
    height: String,
    images: [String] // ✅ Add this line
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
