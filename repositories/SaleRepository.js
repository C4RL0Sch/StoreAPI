const Sale = require("../models/Sale");
const SaleDetail = require("../models/SaleDetail");

// REPOSITORIO DE VENTAS
class SaleRepository {
    async findAll() {
        return await Sale.find().populate("user", "name email");
    }

    async createSale(saleData) {
        return await Sale.create(saleData);
    }

    async createDetail(detailData) {
        return await SaleDetail.create(detailData);
    }

    async getSaleWithDetails(saleId) {
        const sale = await Sale.findById(saleId).populate("user", "name email");
        const details = await SaleDetail.find({ sale: saleId }).populate("product", "name");
        return { sale, details };
    }
}

module.exports = new SaleRepository();