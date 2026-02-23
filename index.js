import { listen } from "./app";
import connectDB from "./config/db";

const port = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
  });
}

startServer();
