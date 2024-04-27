const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

connectDB();


app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
