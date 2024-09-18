import mongoose from 'mongoose';

// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/problema5';

// Function to connect to MongoDB
export const connectDB = async () => {
    try {
        // Try to establish a connection to the database
        await mongoose.connect(MONGO_URI);
        console.log('Database connected for Problem 5');
    } catch (error) {
        // If there's an error, log it and exit the process
        console.error('Database connection error:', error);
        process.exit(1);
    }
};
