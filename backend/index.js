import express from 'express';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { connectDB } from './config/db.js';
dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler)

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));