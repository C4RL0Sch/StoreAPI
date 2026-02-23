import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import saleRoutes from "./routes/saleRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Servidor funcionando 🚀");
});

app.use(express.json());

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

export default app;
