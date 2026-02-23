const mongoose = require("mongoose");

// MODELO DE DETALLE DE VENTA
const saleDetailSchema = new mongoose.Schema({
    sale: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sale",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unitPrice: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("SaleDetail", saleDetailSchema);