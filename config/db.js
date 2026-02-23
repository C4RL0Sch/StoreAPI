const mongoose = require("mongoose");

// Función asíncrona para conectar a la base de datos
const connectDB = async () => {
  try {
    // Usamos la variable de entorno definida en el archivo .env
    // Esto mantiene las credenciales seguras y fuera del código fuente.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (err) {
    console.error("Error MongoDB:", err);
    process.exit(1); // mata la app si falla
  }
};

module.exports = connectDB;