// lsof -i :27017
// mongod --dbpath /tmp/mongodb

const mongoose = require('mongoose');

console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
