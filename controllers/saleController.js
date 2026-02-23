const SaleService = require("../services/SaleService");

const SaleController = {
  list: async (req, res) => {
    try {
      const sales = await SaleService.getAllSales();
      res.status(200).json(sales);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const { userId, items } = req.body;

      if (!userId || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({
          message: "Debes enviar userId e items (array con al menos un producto)",
        });
      }

      const sale = await SaleService.createSale(userId, items);
      return res.status(201).json(sale);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = SaleController;
