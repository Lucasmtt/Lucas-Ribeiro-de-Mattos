"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const mongoose_1 = require("mongoose");
// Schema for the resource, defining how data should be stored
const resourceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
// Create a model based on the schema
exports.Resource = (0, mongoose_1.model)('Resource', resourceSchema);
