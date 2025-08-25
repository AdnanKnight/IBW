const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    contactnumber: { type: Number },
    cart: { type: Array, default: [] }
}, { timestamps: true });

// Export the model correctly
module.exports = mongoose.model("userModel", userSchema);
