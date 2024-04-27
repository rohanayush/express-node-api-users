const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

connectDB();

// Apply CORS middleware with default settings (allows all origins)
app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
