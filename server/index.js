const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const cookieParser = require("cookie-parser");

// Middleware to parse cookies
app.use(cookieParser());
const EcartRouter = require("./Router/Ecart.router");

app.use(cors({ orgin: "http://localhost:3000" }));
app.use(express.json());
app.use(
  "/uploads/products",
  express.static(path.join(__dirname, "uploads/products"))
);
app.use("/Ecart", EcartRouter);

app.listen(8000, () => {
  console.log("server running...");
});
