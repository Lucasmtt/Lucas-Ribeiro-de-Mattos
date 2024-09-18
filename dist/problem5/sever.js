"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resource_1 = __importDefault(require("./routes/resource"));
const database_1 = require("./database");
// Initialize the Express application
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Connect to the database
(0, database_1.connectDB)();
// Set up routes for the resource API
app.use('/api/resources', resource_1.default);
// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server for Problem 5 is running on http://localhost:${PORT}`);
});
