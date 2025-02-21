require("dotenv").config();
const http = require("http");

const app = require("./app");
const { mongoconnect } = require("./services/mongo");

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
  await mongoconnect();
  server.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
  });
}

startServer();
