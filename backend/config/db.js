const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
     "mongodb+srv://faiz:faiz7227@cluster0.ghmun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Atlas Connected");
  } catch (error) {
    console.error("❌ MongoDB Atlas Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
