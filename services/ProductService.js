import ProductRepository from "../repositories/ProductRepository.js";

class ProductService {
  async getAllProducts() {
    return ProductRepository.findAll();
  }

  async getProductById(id) {
    const product = await ProductRepository.findById(id);
    if (!product) throw new Error("Producto no encontrado");
    return product;
  }

  async createProduct(data) {
    return ProductRepository.create(data);
  }

  async updateProduct(id, data) {
    return ProductRepository.update(id, data);
  }

  async deleteProduct(id) {
    return ProductRepository.delete(id);
  }
}

export default new ProductService();
