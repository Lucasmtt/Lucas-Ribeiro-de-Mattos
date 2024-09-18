import { Schema, model } from 'mongoose';

// Define the structure of the resource document
interface IResource {
    name: string;
    description: string;
    createdAt: Date;
}

// Schema for the resource, defining how data should be stored
const resourceSchema = new Schema<IResource>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create a model based on the schema
export const Resource = model<IResource>('Resource', resourceSchema);
