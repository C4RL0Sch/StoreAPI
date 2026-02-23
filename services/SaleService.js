const SaleRepository = require("../repositories/SaleRepository");
const Product = require("../models/Product"); // Acceso directo para precio

// SERVICIO DE VENTAS
// Lógica compleja para crear una venta completa
class SaleService {
    async getAllSales() {
        return await SaleRepository.findAll();
    }

    async createSale(userId, items) {
        // 1. Calcular total y preparar datos
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
                unitPrice: product.price
            });
        }

        // 2. Crear cabecera de venta
        const sale = await SaleRepository.createSale({ user: userId, total });

        // 3. Crear detalles vinculados
        for (const detail of detailsToCreate) {
            await SaleRepository.createDetail({ ...detail, sale: sale._id });
        }

        return await SaleRepository.getSaleWithDetails(sale._id);
    }
}

module.exports = new SaleService();