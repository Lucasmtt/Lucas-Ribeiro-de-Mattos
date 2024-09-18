import express, { Application } from 'express';
import resourceRoutes from './routes/resource';
import { connectDB } from './database';

// Initialize the Express application
const app: Application = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDB();

// Set up routes for the resource API
app.use('/api/resources', resourceRoutes);

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server for Problem 5 is running on http://localhost:${PORT}`);
});
