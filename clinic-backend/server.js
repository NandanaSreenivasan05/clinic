require('dotenv').config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", require("./routes/appointments"));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
