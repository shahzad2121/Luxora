const mongoose = require("mongoose");

require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connection.on("open", () => {
  console.log("DB is Connected");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function mongoconnect() {
  await mongoose.connect(MONGODB_URL);
}

module.exports = { mongoconnect };
