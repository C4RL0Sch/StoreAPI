const ProductRepository = require("../repositories/ProductRepository");

// SERVICIO DE PRODUCTOS
class ProductService {
    async getAllProducts() {
        return await ProductRepository.findAll();
    }

    async getProductById(id) {
        const product = await ProductRepository.findById(id);
        if (!product) throw new Error("Producto no encontrado");
        return product;
    }

    async createProduct(data) {
        return await ProductRepository.create(data);
    }

    async updateProduct(id, data) {
        return await ProductRepository.update(id, data);
    }

    async deleteProduct(id) {
        return await ProductRepository.delete(id);
    }
}

module.exports = new ProductService();