const ProductService = require("../services/ProductService");

const ProductController = {
    list: async (req, res) => {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    get: async (req, res) => {
        try {
            const product = await ProductService.getProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    create: async (req, res) => {
        try {
            const product = await ProductService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update: async (req, res) => {
        try {
            const product = await ProductService.updateProduct(req.params.id, req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    destroy: async (req, res) => {
        try {
            await ProductService.deleteProduct(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = ProductController;