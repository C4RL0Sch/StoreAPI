import SaleRepository from "../repositories/SaleRepository.js";
import Product from "../models/Product.js";

class SaleService {
  async getAllSales() {
    return SaleRepository.findAll();
  }

  async createSale(userId, items) {
    let total = 0;
    const detailsToCreate = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) throw new Error(`Producto ${item.productId} no encontrado`);

      const subtotal = product.price * item.quantity;
      total += subtotal;

      detailsToCreate.push({
        product: item.productId,
        quantity: item.quantity,
        unitPrice: product.price,
      });
    }

    const sale = await SaleRepository.createSale({ user: userId, total });

    for (const detail of detailsToCreate) {
      await SaleRepository.createDetail({ ...detail, sale: sale._id });
    }

    return SaleRepository.getSaleWithDetails(sale._id);
  }
}

export default new SaleService();
