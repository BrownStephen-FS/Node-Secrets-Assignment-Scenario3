const http = require("http");
const prompt = require("prompt-sync")();
require("dotenv").config("./.env");

http
  .createServer()
  .listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);

    const token = process.env.CLIENT_SECRET;
    const inputKey = prompt("Please enter your auth key.  ");
    if (inputKey === token) {
      console.log("Authorization successful! Ending session.");
      process.exit();
    } else {
      console.log("Error incorrect key used. Ending session.");
      process.exit();
    }
  });
