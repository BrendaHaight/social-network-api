const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use combined routes
app.use("/api", routes);

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialNetworkDB"
);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
