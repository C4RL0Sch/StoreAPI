const app = require("./app");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
  });
}

startServer();
