const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String }, // URL to ad image
    link: { type: String },  // Destination URL
    active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Ad', adSchema);
