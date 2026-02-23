import Sale from "../models/Sale.js";
import SaleDetail from "../models/SaleDetail.js";

class SaleRepository {
  async findAll() {
    return Sale.find().populate("user", "name email");
  }

  async createSale(saleData) {
    return Sale.create(saleData);
  }

  async createDetail(detailData) {
    return SaleDetail.create(detailData);
  }

  async getSaleWithDetails(saleId) {
    const sale = await Sale.findById(saleId).populate("user", "name email");
    const details = await SaleDetail.find({ sale: saleId }).populate("product", "name");
    return { sale, details };
  }
}

export default new SaleRepository();
