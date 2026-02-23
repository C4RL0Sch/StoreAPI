const mongoose = require("mongoose");

// MODELO DE PRODUCTO
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    description: String,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);