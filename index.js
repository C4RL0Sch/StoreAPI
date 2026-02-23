const app = require("./app");
const port = 3000;
const connectDB = require("./config/db");

// Conectamos a la Base de Datos al iniciar la app
connectDB();

async function startServer() {
  await connectDB(); // conectas Mongo primero

  app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
  });
}

startServer();