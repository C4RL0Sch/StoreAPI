const mongoose = require("mongoose");

// MODELO DE VENTA (Cabecera)
const saleSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: "completed"
    }
}, { timestamps: true });

module.exports = mongoose.model("Sale", saleSchema);