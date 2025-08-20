const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    brand: String,
    type: String,
    weight: String,
    description: String,
    image: String,
    price: { type: Number, required: true },
    size: {
        length: String,
        breadth: String,
        height: String,
    },
    minPieces: Number,
    totalAmount: Number,
    unitPrice: Number,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
