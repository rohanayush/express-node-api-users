const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const CONN_STRING=process.env.CONN_STRING;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONN_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
