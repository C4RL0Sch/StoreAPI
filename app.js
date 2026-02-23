const express = require("express");
const app = express();

// Importar rutas
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const saleRoutes = require("./routes/saleRoutes");

app.get("/", (req, res) => {
  res.status(200).send("Servidor funcionando 🚀");
});

app.use(express.json());

// Usar rutas
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/sales", saleRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `No existe ningún endpoint para ${req.method} ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

module.exports = app;
