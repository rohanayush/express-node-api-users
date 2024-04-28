import express from 'express'; // Import Express
import cors from 'cors'; // Import CORS middleware
import dotenv from 'dotenv'; // Import Dotenv for environment variables
import connectDB   from '../db.js'; // Import connectDB function
import userRoutes from '../routes/userRoutes.js'; 
dotenv.config();
connectDB();
const app = express();
// Apply CORS middleware with default settings (allows all origins)
app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;