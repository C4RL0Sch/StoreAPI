import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("No se pudo iniciar el servidor:", error.message);
  process.exit(1);
});
